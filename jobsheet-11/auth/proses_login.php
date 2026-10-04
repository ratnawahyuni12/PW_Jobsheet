<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}
require __DIR__ . '/../includes/csrf.php';
require __DIR__ . '/../includes/koneksi.php';

csrf_verify();

$username = trim($_POST['username'] ?? '');
$password = $_POST['password'] ?? '';

$stmt = $pdo->prepare("SELECT * FROM users WHERE username = :username");
$stmt->execute(['username' => $username]);
$user = $stmt->fetch(PDO::FETCH_ASSOC);

if ($user && password_verify($password, $user['password'])) {
    // Regenerasi session ID setelah login berhasil untuk mencegah session fixation.
    session_regenerate_id(true);

    $_SESSION['user_id'] = $user['id'];
    $_SESSION['nama'] = $user['nama'];
    $_SESSION['role'] = $user['role'];

    unset($_SESSION['login_attempts']);

    if (!empty($_POST['remember'])) {
        $token = bin2hex(random_bytes(32));
        $stmt2 = $pdo->prepare("UPDATE users SET remember_token = :token WHERE id = :id");
        $stmt2->execute(['token' => $token, 'id' => $user['id']]);
        setcookie('remember_token', $token, time() + 60 * 60 * 24 * 30, '/');
    }
    
    header('Location: ../index.php');
    exit;
}

$_SESSION['login_attempts'] = ($_SESSION['login_attempts'] ?? 0) + 1;

if ($_SESSION['login_attempts'] >= 3) {
    $pesan = 'Username atau password salah. Kamu sudah gagal ' . $_SESSION['login_attempts'] . ' kali berturut-turut, coba periksa kembali data login-mu.';
} else {
    $pesan = 'Username atau password salah.';
}

$_SESSION['flash'] = ['type' => 'error', 'pesan' => $pesan];
header('Location: login.php');
exit;
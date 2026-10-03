<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

if (isset($_COOKIE['remember_token'])) {
    require __DIR__ . '/../includes/koneksi.php';
    $stmt = $pdo->prepare("UPDATE users SET remember_token = NULL WHERE remember_token = :token");
    $stmt->execute(['token' => $_COOKIE['remember_token']]);
    setcookie('remember_token', '', time() - 3600, '/');
}

session_destroy();
header('Location: login.php');
exit;
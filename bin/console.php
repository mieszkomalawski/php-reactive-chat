<?php
/**
 * Created by PhpStorm.
 * User: mmalawski
 * Date: 30/04/2017
 * Time: 20:34
 */

require __DIR__.'/../vendor/autoload.php';

use Symfony\Component\Console\Application;

$application = new Application();

// ... register commands
$application->add(new \ReactiveChat\Command\StartChatCommand());

$application->run();


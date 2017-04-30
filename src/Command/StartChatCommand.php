<?php
namespace ReactiveChat\Command;

use ReactiveChat\Chat\Chat;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Ratchet\Server\IoServer;

/**
 * Class StartChatCommand
 * @package ReactiveChat\Command
 */
class StartChatCommand extends Command
{
    protected function configure()
    {
        $this->setName('chat:start');
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $output->writeln('Starting server on localhost:9100');

        $server = IoServer::factory(
            new Chat(new \SplObjectStorage()),
            9100
        );

        $server->run();
    }
}
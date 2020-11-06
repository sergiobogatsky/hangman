<?php
namespace Hangman\Models;

class Game
{
    public function checkGameState()
    {

    }

    static function createGame($request)
    {
        try {
            $data = file_get_contents($_SERVER['DOCUMENT_ROOT'] . '/hangman/database/files/games.json');
            $games = json_decode($data, true);
            foreach ($games['list'] as $key => $game) {
                if ($game['id'] == $request->id) {
                    $games['list'][$key] = $request;

                    file_put_contents($_SERVER['DOCUMENT_ROOT'] . '/hangman/database/files/games.json', json_encode($games));
                    return json_encode(['status' => 'game modified']);
                }
            }
            array_push($games['list'], $request);
            file_put_contents($_SERVER['DOCUMENT_ROOT'] . '/hangman/database/files/games.json', json_encode($games));
            return json_encode(['status' => 'game created']);
        }
        catch (\Exception $exception) {
            return json_encode(['error' => $exception->getMessage()]);
        }
    }

    static function getGame($request)
    {
        try {
            $data = file_get_contents($_SERVER['DOCUMENT_ROOT'] . '/hangman/database/files/games.json');
            $games = json_decode($data, true);
            foreach ($games['list'] as $key => $game) {
                if ($game['id'] == $request->id) {
                    return json_encode($game);
                }
            }
            return json_encode(['status' => 'no game found']);
        }
        catch (\Exception $exception) {
            return json_encode(['error' => $exception->getMessage()]);
        }
    }
}
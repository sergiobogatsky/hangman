<?php
namespace Hangman\Models;

class Superhero
{
    /**
     *
     * @return string
     */
    public static function getRandomSuperHero()
    {
        $data = file_get_contents($_SERVER['DOCUMENT_ROOT'] . '/hangman/database/files/superheroes.json');
        $heroes = json_decode($data, true);
        return $heroes['names'][array_rand($heroes['names'])];
    }
}
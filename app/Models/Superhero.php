<?php
namespace Hangman\Models;

class Superhero
{
    /**
     * Get random string from superheroes.json
     * @return string
     */
    public static function getRandomSuperHero()
    {
        $data = file_get_contents(__DIR__.  '/../../database/files/superheroes.json');
        $heroes = json_decode($data, true);
        return $heroes['names'][array_rand($heroes['names'])];
    }
}
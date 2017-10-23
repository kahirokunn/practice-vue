<?php

use Illuminate\Database\Seeder;

class ArticleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 1; $i <= 100; $i++) {
            DB::table('articles')->insert([
                'user_id' => 1,
                'content' => $i . '番目の本文です。',
                'title' => $i . '番目のタイトルです。',
            ]);
        }
    }
}

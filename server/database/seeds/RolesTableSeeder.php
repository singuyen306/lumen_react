<?php

use Illuminate\Database\Seeder;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roles = [
            0 => [
                'name' => 'user'
            ],
            1 => [
                'name' => 'admin'
            ]
        ];

        foreach ($roles as $role){
            \DB::table('roles')->insert($role);
        }
    }
}

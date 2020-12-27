<?php

/*
 * This file is part of fof/gamification.
 *
 * Copyright (c) 2020 FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

use FoF\Gamification\Vote;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
		if ($schema->hasTable('post_votes')) return;
        $schema->table('post_votes', function (Blueprint $table) {
            $table->integer('value')->default(0)->change(); //為什麼不加上change();？ 沒有change()根本只會出現重複的表了
        });

        Vote::query()->chunk(100000, function ($votes) {
            /**
             * @var $vote Vote
             */
			$count = 0;
            foreach ($votes as $vote) {
                $val = $vote->type === 'Up'
                    ? 1
                    : (
                        $vote->type === 'Down'
                        ? -1
                        : 0
                    );

                if ($val === 0) {
                    $vote->delete();
                } else {
                    $vote->value = $val;
                    $vote->save();
                }
				$count++;
				echo $count."次\n";
            }
        });

        $schema->table('post_votes', function (Blueprint $table) {
            $table->dropColumn('type');
        });
    },
    'down' => function (Builder $schema) {
        //
    },
];

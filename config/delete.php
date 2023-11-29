<?php

return [
    '*' => [
        'pluginName' => 'Feed Me',
        'cache' => 60,
        'requestOptions' => [],
        'skipUpdateFieldHandle' => 'skipFeedMeUpdate',
        'backupLimit' => 100,
        'dataDelimiter' => '-|-',
        'csvColumnDelimiter' => '',
        'parseTwig' => false,
        'compareContent' => true,
        'sleepTime' => 0,
        'logging' => true,
        'runGcBeforeFeed' => false,
        'queueTtr' => 300,
        'queueMaxRetry' => 5,
        'assetDownloadCurl' => false,
        'feedOptions' => [
            // '1' => [
            //     'feedUrl' => 'https://fm.x2network.net/fmi/data/v2/databases/ausdone/layouts/workers.api/records',
            //     'requestOptions' => [
            //         'headers' => [
            //             'Accept' => 'application/json',
            //             'Authorization' => 'Bearer b58739fe9c50274b8f02e4b922ba542c2922e028e40c85c2e249',
            //     ],
            //],
            //]
        ],
    ]
];
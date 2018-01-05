|Name|Type|Required|Default|Description|
|----|----|----|----|----|
|type|`oneOf('youtube','vimeo','video')`||`'youtube'`||
|className|`string`|❗️|`'react-plyr'`||
|videoId|`string`|❗️|||
|url|`string`||||
|poster|`string`||||
|sources|`arrayOf`||||
|onReady|`func`||||
|onPlay|`func`||||
|onPause|`func`||||
|onEnd|`func`||||
|onLoadedData|`func`||||
|onSeeked|`func`||||
|onEnterFullscreen|`func`||||
|onVolumeChange|`func`||||
|enabled|`bool`||☑️`true `||
|controls|`arrayOf`||`['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'fullscreen']`||
|loadSprite|`bool`||☑️`true `||
|iconUrl|`string`||`null`||
|iconPrefix|`string`||`'plyr'`||
|debug|`bool`||`false`||
|autoplay|`bool`||`false`||
|preload|`string`||||
|seekTime|`number`||`10`||
|volume|`number`||`5`||
|clickToPlay|`bool`||☑️`true `||
|disableContextMenu|`bool`||☑️`true `||
|hideControls|`bool`||☑️`true `||
|showPosterOnEnd|`bool`||`false`||
|keyboardShortcuts|`shape`||`{  focused: true,  global: false}`||
|tooltips|`shape`||`{  controls: false,  seek: true}`||
|duration|`number`||`null`||
|displayDuration|`bool`||☑️`true `||
|storage|`shape`||`{  enabled: true,  key: 'plyr_volume'}`||

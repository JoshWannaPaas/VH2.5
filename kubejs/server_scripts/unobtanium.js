onEvent('recipes', event => {

  // Initial Obtain Method
  event.shaped( 'architects_palette:unobtanium_block', [
    'TNT',
    'NTN',
    'TNT'
], {
    T: 'architects_palette:twisted_leaves',
    N: 'minecraft:netherite_ingot'
})
    
  // Compression
  event.shapeless('1x architects_palette:unobtanium_block', '4x architects_palette:unobtanium')
  event.shapeless('1x architects_palette:white_unobtanium_block', '4x architects_palette:white_unobtanium')
  event.shapeless('1x architects_palette:orange_unobtanium_block', '4x architects_palette:orange_unobtanium')
  event.shapeless('1x architects_palette:magenta_unobtanium_block', '4x architects_palette:magenta_unobtanium')
  event.shapeless('1x architects_palette:light_blue_unobtanium_block', '4x architects_palette:light_blue_unobtanium')
  event.shapeless('1x architects_palette:yellow_unobtanium_block', '4x architects_palette:yellow_unobtanium')
  event.shapeless('1x architects_palette:lime_unobtanium_block', '4x architects_palette:lime_unobtanium')
  event.shapeless('1x architects_palette:pink_unobtanium_block', '4x architects_palette:pink_unobtanium')
  event.shapeless('1x architects_palette:gray_unobtanium_block', '4x architects_palette:gray_unobtanium')
  event.shapeless('1x architects_palette:light_gray_unobtanium_block', '4x architects_palette:light_gray_unobtanium')
  event.shapeless('1x architects_palette:cyan_unobtanium_block', '4x architects_palette:cyan_unobtanium')
  event.shapeless('1x architects_palette:blue_unobtanium_block', '4x architects_palette:blue_unobtanium')
  event.shapeless('1x architects_palette:brown_unobtanium_block', '4x architects_palette:brown_unobtanium')
  event.shapeless('1x architects_palette:green_unobtanium_block', '4x architects_palette:green_unobtanium')
  event.shapeless('1x architects_palette:red_unobtanium_block', '4x architects_palette:red_unobtanium')
  event.shapeless('1x architects_palette:purple_unobtanium_block', '4x architects_palette:purple_unobtanium')
  event.shapeless('1x architects_palette:black_unobtanium_block', '4x architects_palette:black_unobtanium')

  // Decompression
  event.shapeless('5x architects_palette:unobtanium', '1x architects_palette:unobtanium_block')
  event.shapeless('5x architects_palette:white_unobtanium', '1x architects_palette:white_unobtanium_block')
  event.shapeless('5x architects_palette:orange_unobtanium', '1x architects_palette:orange_unobtanium_block')
  event.shapeless('5x architects_palette:magenta_unobtanium', '1x architects_palette:magenta_unobtanium_block')
  event.shapeless('5x architects_palette:light_blue_unobtanium', '1x architects_palette:light_blue_unobtanium_block')
  event.shapeless('5x architects_palette:yellow_unobtanium', '1x architects_palette:yellow_unobtanium_block')
  event.shapeless('5x architects_palette:lime_unobtanium', '1x architects_palette:lime_unobtanium_block')
  event.shapeless('5x architects_palette:pink_unobtanium', '1x architects_palette:pink_unobtanium_block')
  event.shapeless('5x architects_palette:gray_unobtanium', '1x architects_palette:gray_unobtanium_block')
  event.shapeless('5x architects_palette:light_gray_unobtanium', '1x architects_palette:light_gray_unobtanium_block')
  event.shapeless('5x architects_palette:cyan_unobtanium', '1x architects_palette:cyan_unobtanium_block')
  event.shapeless('5x architects_palette:blue_unobtanium', '1x architects_palette:blue_unobtanium_block')
  event.shapeless('5x architects_palette:brown_unobtanium', '1x architects_palette:brown_unobtanium_block')
  event.shapeless('5x architects_palette:green_unobtanium', '1x architects_palette:green_unobtanium_block')
  event.shapeless('5x architects_palette:red_unobtanium', '1x architects_palette:red_unobtanium_block')
  event.shapeless('5x architects_palette:purple_unobtanium', '1x architects_palette:purple_unobtanium_block')
  event.shapeless('5x architects_palette:black_unobtanium', '1x architects_palette:black_unobtanium_block')

  // Dye
  event.shapeless('8x architects_palette:white_unobtanium', ['8x architects_palette:unobtanium_block', 'minecraft:white_dye'])
  event.shapeless('8x architects_palette:orange_unobtanium', ['8x architects_palette:unobtanium_block', 'minecraft:orange_dye'])
  event.shapeless('8x architects_palette:magenta_unobtanium', ['8x architects_palette:unobtanium_block', 'minecraft:magenta_dye'])
  event.shapeless('8x architects_palette:light_blue_unobtanium', ['8x architects_palette:unobtanium_block', 'minecraft:light_blue_dye'])
  event.shapeless('8x architects_palette:yellow_unobtanium', ['8x architects_palette:unobtanium_block', 'minecraft:yellow_dye'])
  event.shapeless('8x architects_palette:lime_unobtanium', ['8x architects_palette:unobtanium_block', 'minecraft:lime_dye'])
  event.shapeless('8x architects_palette:pink_unobtanium', ['8x architects_palette:unobtanium_block', 'minecraft:pink_dye'])
  event.shapeless('8x architects_palette:gray_unobtanium', ['8x architects_palette:unobtanium_block', 'minecraft:gray_dye'])
  event.shapeless('8x architects_palette:light_gray_unobtanium', ['8x architects_palette:unobtanium_block', 'minecraft:light_gray_dye'])
  event.shapeless('8x architects_palette:cyan_unobtanium', ['8x architects_palette:unobtanium_block', 'minecraft:cyan_dye'])
  event.shapeless('8x architects_palette:blue_unobtanium', ['8x architects_palette:unobtanium_block', 'minecraft:blue_dye'])
  event.shapeless('8x architects_palette:brown_unobtanium', ['8x architects_palette:unobtanium_block', 'minecraft:brown_dye'])
  event.shapeless('8x architects_palette:green_unobtanium', ['8x architects_palette:unobtanium_block', 'minecraft:green_dye'])
  event.shapeless('8x architects_palette:red_unobtanium', ['8x architects_palette:unobtanium_block', 'minecraft:red_dye'])
  event.shapeless('8x architects_palette:purple_unobtanium', ['8x architects_palette:unobtanium_block', 'minecraft:purple_dye'])
  event.shapeless('8x architects_palette:black_unobtanium', ['8x architects_palette:unobtanium_block', 'minecraft:black_dye'])
})
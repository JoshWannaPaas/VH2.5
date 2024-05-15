console.info('Adding custom blocks!')


onEvent('block.registry', event => {

    //deco blocks
    event.create('architects_palette:acacia_boards')
  	   .material('wood')
       .hardness(2.0)
       .displayName('Acacia Boards')
       .harvestTool('axe', 0) 
    
    event.create('architects_palette:birch_boards')
  	   .material('wood')
       .hardness(2.0)
       .displayName('Birch Boards')
       .harvestTool('axe', 0)

    event.create('quark:blossom_planks')
  	   .material('wood')
       .hardness(2.0)
       .displayName('Blossom Planks')
       .harvestTool('axe', 0) 

    event.create('quark:blossom_boards')
  	   .material('wood')
       .hardness(2.0)
       .displayName('Blossom Boards')
       .harvestTool('axe', 0) 

    event.create('architects_palette:crimson_boards')
  	   .material('wood')
       .hardness(2.0)
       .displayName('Crimson Boards')
       .harvestTool('axe', 0)

    event.create('architects_palette:dark_oak_boards')
  	   .material('wood')
       .hardness(2.0)
       .displayName('Dark Oak Boards')
       .harvestTool('axe', 0)

    event.create('architects_palette:jungle_boards')
  	   .material('wood')
       .hardness(2.0)
       .displayName('Jungle Boards')
       .harvestTool('axe', 0)

    event.create('architects_palette:oak_boards')
  	   .material('wood')
       .hardness(2.0)
       .displayName('Oak Boards')
       .harvestTool('axe', 0)

    event.create('architects_palette:spruce_boards')
  	   .material('wood')
       .hardness(2.0)
       .displayName('Spruce Boards')
       .harvestTool('axe', 0)

    event.create('architects_palette:twisted_boards')
  	   .material('wood')
       .hardness(2.0)
       .displayName('Twisted Boards')
       .harvestTool('axe', 0)

    event.create('architects_palette:warped_boards')
  	   .material('wood')
       .hardness(2.0)
       .displayName('Warped Boards')
       .harvestTool('axe', 0) 


})

onEvent('recipes', event => {
    event.shaped('1x architects_palette:acacia_board', [
        'PP ',
        'PP ',
        '   '
    ], {
        P: 'minecraft:acacia_planks'
    })

    event.shaped('1x architects_palette:birch_boards', [
        'PP ',
        'PP ',
        '   '
    ], {
        P: 'minecraft:birch_planks'
    })

    event.shaped('4x quark:blossom_planks', [
        '   ',
        ' L ',
        '   '
    ], {
        L: 'quark:blossom_log'
    })

    event.shaped('1x quark:blossom_boards', [
        'PP ',
        'PP ',
        '   '
    ] ,{
        P: 'quark:blossom_planks'
    })


    event.shaped('1x architects_palette:crimson_boards', [
        'PP ',
        'PP ',
        '   '
    ], {
        P: 'minecraft:crimson_planks'
    })


    event.shaped('1x architects_palette:dark_oak_boards', [
        'PP ',
        'PP ',
        '   '
    ], {
        P: 'minecraft:dark_oak_planks'
    })


    event.shaped('1x architects_palette:jungle_boards', [
        'PP ',
        'PP ',
        '   '
    ], {
        P: 'minecraft:jungle_planks'
    })


    event.shaped('1x architects_palette:oak_boards', [
        'PP ',
        'PP ',
        '   '
    ], {
        P: 'minecraft: oak_planks'
    })


    event.shaped('1x architects_palette:spruce_boards', [
        'PP ',
        'PP ',
        '   '
    ], {
        P :'minecraft: spruce_planks'
    })


    event.shaped('1x architects_palette:twisted_boards', [
        'PP ',
        'PP ',
        '   '
    ], {
        P: 'architects_palette:twisted_planks'
    })


    event.shaped('1x architects_palette:warped_boards', [
        'PP ',
        'PP ',
        '   '
    ], {
        P: 'minecraft:warped_planks'
    })
})
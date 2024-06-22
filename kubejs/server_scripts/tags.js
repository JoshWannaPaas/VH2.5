// priority: 1
/* scripts made by Douwsky
for Iskall85's Vaulthunters 
ported by a1qs to KubeJS */

console.info('Adding Tags!')

let colors = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'black', 'light_gray']

onEvent('item.tags', event => {

    event.add('ag:crafter', [
        '#refinedstorage:crafter',
        'rftoolsutility:crafter1',
        'rftoolsutility:crafter2',
        'rftoolsutility:crafter3',
        'create:mechanical_crafter',
        'appliedenergistics2:molecular_assembler',
        'thermal:machine_crafter',
        'botania:crafting_halo',
        'botania:auto_crafting_halo',
        'mekanism:formulaic_assemblicator'
    ])

    event.add('the_vault:vault_junk', [
        'minecraft:stone',
        'minecraft:cobblestone',
        'minecraft:coal',
        'minecraft:bread',
        'minecraft:iron_ore',
        'minecraft:carrot',
        'minecraft:potato',
        'minecraft:leather',
        'minecraft:flint',
        'minecraft:porkchop',
        'minecraft:redstone_ore',
        'minecraft:gold_ore',
        'minecraft:coal_ore',
        'minecraft:string',
        'minecraft:glowstone_dust',
        'minecraft:spider_eye',
        'minecraft:rotten_flesh',
        'minecraft:bone',
        'minecraft:gunpowder',
        'minecraft:feather',
        'minecraft:blaze_rod',
        'minecraft:ender_pearl',
        'minecraft:magma_cream',
        'minecraft:experience_bottle',
        'minecraft:slime_ball',
        'minecraft:arrow'
    ])
    event.add('the_vault:vault_resource', [
        'minecraft:netherite_scrap',
        'minecraft:diamond',
        'minecraft:gold_nugget',
        'minecraft:gold_ingot',
        'minecraft:iron_ingot',
        'the_vault:magnetite',
        'minecraft:emerald',
        'minecraft:wither_skeleton_skull',
        'the_vault:vault_apple',
        'minecraft:nether_star'
    ])
    event.add('the_vault:vault_powerup', [
        'minecraft:golden_apple',
        'the_vault:relic_booster_pack',
        'the_vault:hearty_apple',
        'the_vault:jade_apple',
        'the_vault:cobalt_apple',
        'the_vault:candy_bar',
        'the_vault:power_bar',
        'the_vault:vault_cookie',
        'the_vault:pixie_apple'

    ])
    event.add('forge:vault_special', [
        'the_vault:star_essence',
        'the_vault:mystery_box',
        'the_vault:gem_larimar',
        'the_vault:gem_benitoite',
        'the_vault:drill_arrow',
        'minecraft:wither_skeleton_skull',
        'the_vault:soul_flame',
        'the_vault:vault_diamond',
        'the_vault:gem_alexandrite',
        'the_vault:gem_wutodie',
        'the_vault:key_piece',
        'the_vault:vault_dust',
        'the_vault:vault_plating',
        'the_vault:wutax_shard',
        'the_vault:vault_bronze',
        'the_vault:vault_silver',
        'the_vault:skill_essence',
        'the_vault:burger_patty',
        'the_vault:burger_bun',
        'the_vault:mature_cheddar',
        'the_vault:mystic_tomato',
        'the_vault:mod_box',
        'the_vault:void_orb',
        'the_vault:mystery_egg',
        'the_vault:gem_echo',
        'the_vault:vault_nugget',
        'the_vault:vault_ingot',
        'the_vault:crystal_burger'
    ])
    event.add('the_vault:wooden_chest', [
        'minecraft:stone',
        'minecraft:cobblestone',
        'minecraft:coal',
        'minecraft:bread',
        'minecraft:iron_ore',
        'minecraft:carrot',
        'minecraft:potato',
        'minecraft:leather',
        'minecraft:flint',
        'minecraft:porkchop',
        'minecraft:redstone_ore',
        'minecraft:gold_ore',
        'minecraft:coal_ore',
        'minecraft:string',
        'minecraft:glowstone_dust',
        'minecraft:spider_eye',
        'minecraft:rotten_flesh',
        'minecraft:bone',
        'minecraft:gunpowder',
        'minecraft:feather',
        'minecraft:blaze_rod',
        'minecraft:ender_pearl',
        'minecraft:magma_cream',
        'minecraft:experience_bottle',
        'minecraft:slime_ball',
        'minecraft:arrow',
        'minecraft:netherite_scrap',
        'minecraft:diamond',
        'minecraft:gold_nugget',
        'minecraft:gold_ingot',
        'minecraft:iron_ingot',
        'the_vault:magnetite',
        'minecraft:emerald',
        'the_vault:vault_dust',
        'the_vault:vault_diamond',
        'the_vault:vault_plating',
        'the_vault:wutax_shard',
        'the_vault:vault_bronze',
        'the_vault:vault_silver',
        'the_vault:mystery_box',
        'the_vault:star_essence',
        'the_vault:skill_essence',
        'the_vault:gem_larimar',
        'the_vault:gem_benitoite',
        'the_vault:drill_arrow',
        'the_vault:gem_alexandrite',
        'the_vault:gem_wutodie',
        'the_vault:key_piece',
        'the_vault:burger_patty',
        'the_vault:burger_bun',
        'the_vault:mature_cheddar',
        'the_vault:mystic_tomato',
        'the_vault:mystery_egg',
        'the_vault:hearty_apple',
        'the_vault:jade_apple',
        'the_vault:cobalt_apple',
        'the_vault:candy_bar',
        'the_vault:power_bar',
        'the_vault:vault_cookie',
        'the_vault:pixie_apple',
        'the_vault:mod_box',
        'minecraft:wither_skeleton_skull',
        'minecraft:nether_star',
        'the_vault:void_orb'
    ])
    event.add('the_vault:gilded_chest', [
        'minecraft:netherite_scrap',
        'minecraft:diamond',
        'minecraft:gold_nugget',
        'minecraft:gold_ingot',
        'minecraft:iron_ingot',
        'the_vault:magnetite',
        'minecraft:emerald',
        'minecraft:wither_skeleton_skull',
        'the_vault:vault_apple',
        'minecraft:nether_star',
        'minecraft:golden_apple',
        'the_vault:relic_booster_pack',
        'the_vault:hearty_apple',
        'the_vault:jade_apple',
        'the_vault:cobalt_apple',
        'the_vault:candy_bar',
        'the_vault:power_bar',
        'the_vault:vault_cookie',
        'the_vault:pixie_apple',
        'the_vault:star_essence',
        'the_vault:mystery_box',
        'the_vault:gem_larimar',
        'the_vault:gem_benitoite',
        'the_vault:drill_arrow',
        'minecraft:wither_skeleton_skull',
        'the_vault:soul_flame',
        'the_vault:vault_diamond',
        'the_vault:gem_alexandrite',
        'the_vault:gem_wutodie',
        'the_vault:key_piece',
        'the_vault:vault_dust',
        'the_vault:vault_plating',
        'the_vault:wutax_shard',
        'the_vault:vault_bronze',
        'the_vault:vault_silver',
        'the_vault:skill_essence',
        'the_vault:burger_patty',
        'the_vault:burger_bun',
        'the_vault:mature_cheddar',
        'the_vault:mystic_tomato',
        'the_vault:mod_box',
        'the_vault:void_orb',
        'the_vault:mystery_egg',
        'the_vault:gem_echo',
        'the_vault:vault_nugget',
        'the_vault:vault_ingot',
        'the_vault:crystal_burger'
    ])

    event.add('the_vault:commongems', [
        'the_vault:gem_larimar',
        'the_vault:gem_benitoite'
    ])
    
    colors.forEach(colors =>{
        event.add('ag:concrete',
            `minecraft:${colors}_concrete`
    )})

    colors.forEach(colors =>{
        event.add('ag:concrete_powder',
            `minecraft:${colors}_concrete_powder`
    )})
})

onEvent('block.tags', event => {
    event.add('the_vault:validportalblocks', [
        'minecraft:polished_blackstone',
        'minecraft:polished_blackstone_bricks',
        'minecraft:cracked_polished_blackstone_bricks',
        'minecraft:chiseled_polished_blackstone',
        'minecraft:gilded_blackstone',
        'minecraft:blackstone',
        'the_vault:vault_stone'

    ])
})
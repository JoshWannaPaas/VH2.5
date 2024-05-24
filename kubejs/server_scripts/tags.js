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
// priority: 1
/* scripts made by Douwsky
for Iskall85's Vaulthunters 
ported by a1qs to KubeJS */

console.info('Adding Tags!')

let colors = ["white","orange","magenta","light_blue","yellow","lime","pink","gray","cyan","purple","blue","brown","green","black","light_gray"]

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
    
    colors.forEach(colors =>{
        event.add('ag:concrete',
            `minecraft:${colors}_concrete`
    )})

    colors.forEach(colors =>{
        event.add('ag:concrete_powder',
            `minecraft:${colors}_concrete_powder`
    )})
})
console.info('Adding custom blocks!')

onEvent('block.registry', event => {
    event.create('the_vault_extras:infusion_altar')
    .material('stone')
    .hardness(2.5)
    .displayName('Infusion Altar')
    .requiresTool(true)
    .renderType('cutout')
    .notSolid()
})
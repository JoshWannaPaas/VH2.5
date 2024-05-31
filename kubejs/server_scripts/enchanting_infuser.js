onEvent('recipes', event => {
  event.shaped('1x enchantinginfuser:enchanting_infuser', [
      ' X ',
      'NON',
      'OEO'
  ], {
      X: 'minecraft:enchanting_table',
      E: 'minecraft:emerald_block',
      O: 'minecraft:obsidian',
      N: 'minecraft:netherite_ingot'
  })
})
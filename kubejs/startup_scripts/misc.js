onEvent('block.modification', event => {
  event.modify('the_vault:vault_chest', block => {
    block.destroySpeed = 35
  })
})

onEvent('item.modification', event => {
  event.modify('minecraft:ender_pearl', item => {
    item.maxStackSize = 64
  })
  event.modify('minecraft:snowball', item => {
    item.maxStackSize = 64
  })
})
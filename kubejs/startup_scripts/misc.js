onEvent('block.modification', event => {
    event.modify('the_vault:vault_chest', block => {
        block.destroySpeed = 35
      })
})
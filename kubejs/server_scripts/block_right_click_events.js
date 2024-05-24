/* scripts made by a1qs
for Vault Hunters 2.5 */


onEvent('block.right_click', event =>{
    if(event.block.id == 'the_vault:vault_altar' && event.hand == MAIN_HAND && event.item.id != 'the_vault:vault_rock' && event.item.id != 'the_vault:gem_pog' && !event.player.crouching){
        var bx = event.block.getX()
        var by = event.block.getY()
        var bz = event.block.getZ()
        var itemCount = event.item.count
        console.log(event.item.id)

        let itemEntity = event.level.createEntity('minecraft:item')
            itemEntity.setX(bx + 0.5)
            itemEntity.setY(by + 1.5)
            itemEntity.setZ(bz + 0.5)
            itemEntity.item = Item.of(event.item.id, itemCount)
            itemEntity.spawn()
            event.item.count = 0
    }
})   

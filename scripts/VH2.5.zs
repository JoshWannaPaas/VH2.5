/* scripts made by a1qs
for Vault Hunters 2.5 */

val paxel = <item:the_vault:vault_paxel>;
val fortunePaxel = paxel.withTag({ShouldEnhance: 0 as byte, Enhancement: {Id: "the_vault:fortunate" as string}});

craftingTable.addShaped("thevault_fortunatepaxel", fortunePaxel, [
    [paxel, <item:the_vault:paxel_charm>, paxel],
    [<item:the_vault:echo_pog>, <item:the_vault:vault_diamond_block>, <item:the_vault:echo_pog>],
    [paxel, <item:the_vault:paxel_charm>, paxel]
]);
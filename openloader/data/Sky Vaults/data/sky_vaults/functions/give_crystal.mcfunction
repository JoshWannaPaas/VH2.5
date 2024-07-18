#Get player level
execute store result score @p SkyVaultsLevel run the_vault debug getPlayerLevel @p

#Give Beginner's Grace crystal if less than/equal to level 50
execute if score @p SkyVaultsLevel <= SkyVaultsLevelThreshold SkyVaultsLevel run give @p the_vault:vault_crystal{CrystalData: {rooms: [], Frame: {Tiles: []}, canBeModified: 0b, canTriggerInfluences: 0b, canGenerateTreasureRooms: 0b, Challenge: 0b, PlayerBossName: "", Objective: "the_vault:summon_and_kill_boss", Type: "CLASSIC", preventsRandomModifiers: 1b, targetObjectiveCount: 11, echoData: {echoCount: 0}, Modifiers: [{Operation: 0, Name: "Very Unlucky"}, {Operation: 0, Name: "Hurry"}, {Operation: 0, Name: "No Extras"}, {Operation: 0, Name: "Beginner's Grace"}]}, RepairCost: 0, display: {Name: '["",{"text":"Beginner\'s Rotten Vault Crystal","italic":false,"color":"#a0af5b","bold":true}]'}}

#Give normal crystal if over level 50
execute if score @p SkyVaultsLevel > SkyVaultsLevelThreshold SkyVaultsLevel run give @p the_vault:vault_crystal{CrystalData: {rooms: [], Frame: {Tiles: []}, canBeModified: 0b, canTriggerInfluences: 0b, canGenerateTreasureRooms: 0b, Challenge: 0b, PlayerBossName: "", Objective: "the_vault:summon_and_kill_boss", Type: "CLASSIC", preventsRandomModifiers: 1b, targetObjectiveCount: 11, echoData: {echoCount: 0}, Modifiers: [{Operation: 0, Name: "Very Unlucky"}, {Operation: 0, Name: "Hurry"}, {Operation: 0, Name: "No Extras"}]}, RepairCost: 0, display: {Name: '["",{"text":"Rotten Vault Crystal","italic":false,"color":"#a0af5b","bold":true}]'}}


# Changelog between VH2 & VH2.5


### Gameplay changes
- ALL Vault Crystals are now Cooperative
- Added Extraordinary Gems from VH3
- Added Uncrafting of Perfect & Extraordinary Gems into their counterparts
- Added the Ability to Respec between Artisan & Treasure Hunter
- Implemented a Tier 4 Vault Charm Upgrade
- Added the Enchantment Infuser to simplify enchanting Items
- Fixed Explosion Traps appearing before Vault Level 25
- Modified Research Cost (Global) Increases
- Modified Research Costs
- Removed certain Researches
- Moved certain Researches to a new Looting Category
- Modified AG Research Cost from 100 -> 200
- Allow Players to use Vault Stone as a Portal Block
- Mega Statues no longer produce decorative Items
- Vault Gear can be obtained starting from Vault Level 0
- Modified Tooltips for various Vault Items
- Unified the durability damage between Armor and Tools
- Unbreaking Enchantment/Talent works up to level 25 now
- Clarified the effect of the RIFT etching
- Buffed the Vault Pearl to 32 Uses (from 10)
- Added a sound upon casting the Hunter ability
- Added Curio support to the Vault Charm
- Added Curio support for the Vault Magnet
- Added Curio support for the Soul Shard Pouch
- Added an Unbreakable Anvil
- Uncommon Backpack is no longer gated behind Research
- Unified Relic weights
- Supply the player with **The Vault Encyclopedia** and 16x Steak
- Added Nether Wart to LVL0 Loottables
- Up to Vault Level 5, All Vaults guarantee Safe Zone, Personal Space & Phoenix
- Modified Quark Configs for QOL Tweaks
- Upped chance to get Netherite Gear in LVL 0 - 24 Loottables
- Added the Library Room from VH3, 5x as rare
- Added Unused Colosseum, Toy & Squid Room
- Upped chance for non-artisans to craft Tier 3 Gear
- Added Deco Wood Board Blocks from a newer version of Architects Palette
- Added the Gaia 2, Tweaked drops and removed Relic drops
- Added the Ultimate Backpack from SimplyBackpacks to Treasure Rooms
- Increased Soul Hunter Values (0% -> 100%, 50% -> 200%, 100% -> 300%, 200% -> 400%, 300% -> 500%)
- Colored Scavenger Items to reflect where they drop from
- Updated the Vault Altar pool to remove Quark Items
- Removed RFTools Storage due to gamebreaking bug
- Added the IntegratedDynamics mod (+ Addons) which is the replacement for RFTools Storage
- Added Emojiful and added Emojis for all the Vault Modifiers
- Added EasyPiglins to the EasyVillagers Research
- Removed the Wooden Mine room
- Improved Vault Gear Rarity Rolls in favour of Treasure Hunters (up to LVL 500)
- Removed the Vault Blacksmith Research Requirement to craft Vault Gear
- Buffed Legendary Treasures slightly
- Added a soft cap to Overlevel Enchantments (15 levels above default)
- Added the SkyVaults World Type
    - This is based off of Deadpines Skyvaults for VH2
    - You will spawn on an island similar to VH3s SkyVaults which has a button that can generate infinite Rotten Vault Crystals
    - The Island has been modified to provide Items unobtainable in the vault in Altars to remove the need to cheat in items
- Added Vault Rock ore in the Vaults (As rare as Painite)
- Modified Vault Sword rolls to guarantee being better than a Netherite Sword
- Added SophisticatedBackpacks
    - Added Research
    - Added Custom Recipes
    - SophisticatedBackpacks is significantly more expensive than other looting alternatives, as it makes Danks and SimplyBackpacks redundant.
    - This change was made to bring VH3 players that are used to SophisticatedBackpacks an alternative to Danks further in the Game.
- Completly Overhauled Trader Cores
- Added Chaining and Attack AoE to tier 2
- Add new Modbox drops to new Mods & changed the default drop to 4 star shards incase the player has no mods unlocked
- Significantly buffed LVL 0 Treasure Chests
- Added the Mystic Pear to LVL 200+ Loottables
- Lowered Vault Chest Hardness by 20% to make mining Vault Chests easier in the Earlygame
- Made Treasure Chests prior to LVL 100 use the `treasureroom` Gear pool, which significantly buffs the rarity rolls
- Vault Burgers/Pizza can no longer roll 0% XP
- Added a Keybind to toggle Magnets in Curio Slots
- Added the mod SecondChance
    - This mod has 2 notable features
    - If you are above 13.5 health points, a fatal blow that would normally unalive you, will set you to 5% of your total health
    - Give players a .5s window upon falling of a block to Jump (CoyoteJump)
- Added Advanced Vault Pearls
    - These have been added to give a use to Vault pearls (and to not make them a total joke)
    - Advanced Vault Pearl [INDESTRUCTABLE]: an infinite Vault Pearl.
    - Advanced Vault Pearl [UNSTABLE]: a Pearl that explodes upon impact with the power of a TNT Block
    - Advanced Vault Pearl [SWIFT]: a rapid Vault Pearl with less accuracy.
- Added the **Infusion Altar Block**
    - Allows Players to make Challenge Crystals Cooperative
    - May be used for other items in the future
- Added the Vault Encyclopedia
    - This is the Guide book for VH2.5
    - This book is used to explain majority of mechanics to the player with the Vault Mod and the Vault Extras Mod
    - It also includes Challenges for dedicated Players which will reward the Player with certain Items (?)



### Recipe Changes
- Added a recipe to Craft Fortune Paxels
- Ported the majority of recipes to KubeJS
- Clean up unused Recipes
- Add Artisan & Treasure Hunter Flask Recipes
- Mod Ingots/Blocks/Nuggets are now Interchangable between eachother
- Added a Cage Dust Recipe
- Added an Elytra Recipe
- Made SimplyBackpacks significantly cheaper
- Golden apples have been reverted to their vanilla recipe
- Health potions have been reverted to their vanilla recipe
- Regeneration potions have been reverted to their vanilla recipe
- Lingering potions have been reverted to their vanilla recipe
- Added an efficient Andesite Alloy recipe
- Modified the Gas Burning Generator recipe from Mekanism
- Added a Recipe to the Thor's Ring Relic from Botania
- Lowered the Smelt time of Vault gear from 60s to 15s
- Added a recipe to reroll Artisan Scrolls
- Changed the Vault Altar recipe to not require Purpur


### Miscellaneous Changes
- Added a `the_vault:commongems` tag for Larimar & Beniotite
- Added a `the_vault:validportalblocks` tag for Valid Vault portal blocks
- added a `the_vault:wooden_chest` tag to all items found in wooden vault chests
- added a `the_vault:gilded_chest` tag to all items found in gilded chests
- added a `the_vault:vault_junk` tag to items in the junk resource pool (junk items in both chest types)
- added a `the_vault:vault_resource` tag to items in the resource pool (resource items in both chest types)
- added a `the_vault:vault_powerup` tag to items in the power-up resource pool (power-up items in both chest types)
- added a `the_vault:vault_special` tag to items in the special pool (special items in both chest types)
- Fixed the Vault Altar Model in Inventories
- Hid all AE2 facades (excluding stone) from JEI
- Renamed Mob difficulty Modifiers to be more clearer
- Added more Overlevel config Entries
- Cleaned up JEI
- Added a Custom Loading & Titlescreen
- Added Custom Splashes
- Modified AE2 & RS recipes to be generally cheaper
- Players can now right click the Vault altar to drop items directly onto it
- Changed stack sizes for Ender Pearls & Snowballs to 64
- Added JEI Integration for Etching Vendors


### Mod Changes
- \+ The Vault Extras [BOTH]
- \+ FerriteCore [BOTH]
- \+ LazyDFU [BOTH]
- \+ Rhino [BOTH]
- \+ KubeJS [BOTH]
- \+ KubeJS Create [BOTH]
- \+ Polymorph [BOTH]
- \+ Architects Palette [BOTH]
- \+ Nature's Compass [BOTH]
- \+ CommonCapabilities [BOTH]
- \+ CyclopsCore [BOTH]
- \+ IntegratedDynamics [BOTH]
- \+ IntegratedTerminals [BOTH]
- \+ IntegratedTunnels [BOTH]
- \+ EasyPiglins [BOTH]
- \+ SophisticatedBackpacks [BOTH]
- \+ Emojiful [BOTH] (?)
- \+ Jade [BOTH]
- \+ SecondChance [BOTH]
- \+ Embeddium [CLIENT]
- \+ AppleSkin [CLIENT]
- \+ FancyMenu [CLIENT]
- \+ ~~ModernFix [CLIENT]~~
- \+ ShutUpExperimentalSettings [CLIENT]
- \+ LegendaryTooltips [CLIENT]
- \+ FPSreducer [CLIENT]

- \- ToroHealth [BOTH]
- \- RangedPumps [BOTH]
- \- HWYLA [BOTH]
- \- CreateTweaker [BOTH]



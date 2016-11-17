
module.exports = {
  name: "Nondescript Corridor",
  description: "It is very dark. To the north you can just make out a faint glimmer of golden light.",
  exits: {
    north:true
  },
  removeItem: function(item) {
    this.items.splice(this.items.indexOf(item), 1)
  },
  items: [
    {
      name: "Rusty Sword",
      type: "weapon",
      damage: 1,
      description: "A Rusty old Sword, knocked and well used"
    },
    {
      name: "Cheese",
      type: "food",
      health: 0.5,
      description: "A Piece of Mouldy Cheese"
    }
  ]
}

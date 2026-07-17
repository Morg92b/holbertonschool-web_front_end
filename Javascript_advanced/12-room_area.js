/**
 * Object roomDimensions
 * Contains dimensions and a method to calculate area.
 * @property {number} width - The width of the room.
 * @property {number} length - The length of the room.
 * @method getArea - Returns the surface area (width * length).
 */

const roomDimensions = {
    width: 50,
    length: 100,
    getArea: function () {
        return this.width * this.length;
    }
};

/**
 * Variable boundGetArea
 * Creates a new function from roomDimensions.getArea
 * with the 'this' context explicitly bound to the roomDimensions object.
 */

const boundGetArea = roomDimensions.getArea.bind(roomDimensions);

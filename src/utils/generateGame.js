/**
 * Order of the game matrix.
 * @constant
 * @type {number}
 */
const n = 6

/**
 * Represents a game.
 *
 */
class Game {
  // Image url list.
  /** @private */
  #unique_cards = [
    {
      url_img: '/Cards/Bone_Bearer.webp',
      uses: 2,
    },
    {
      url_img: '/Cards/Bone_Captain.webp',
      uses: 2,
    },
    {
      url_img: '/Cards/Castellan.webp',
      uses: 2,
    },
    {
      url_img: '/Cards/Fanatic.webp',
      uses: 2,
    },
    {
      url_img: '/Cards/Ghoul.webp',
      uses: 2,
    },
    {
      url_img: '/Cards/Grave_Robber.webp',
      uses: 2,
    },
    {
      url_img: '/Cards/Hellion.webp',
      uses: 2,
    },
    {
      url_img: '/Cards/Jester.webp',
      uses: 2,
    },
    {
      url_img: '/Cards/Miller.webp',
      uses: 2,
    },
    {
      url_img: '/Cards/Piglet.webp',
      uses: 2,
    },
    {
      url_img: '/Cards/Plague_Doctor.webp',
      uses: 2,
    },
    {
      url_img: '/Cards/Prophet_Sprite.webp',
      uses: 2,
    },
    {
      url_img: '/Cards/Scarecrow.webp',
      uses: 2,
    },
    {
      url_img: '/Cards/Shambler.webp',
      uses: 2,
    },
    {
      url_img: '/Cards/Squiffy_Ghast.webp',
      uses: 2,
    },
    {
      url_img: '/Cards/The_Collector.webp',
      uses: 2,
    },
    {
      url_img: '/Cards/The_Thing.webp',
      uses: 2,
    },
    {
      url_img: '/Cards/Vestal.webp',
      uses: 2,
    },
  ]

  // List of ids for key.
  /** @private */
  #ids = [
    '0782bf46-9af3-40e6-a957-494ce7579bae',
    '7541012d-175a-4a13-96d6-39bd46209867',
    '03336bb2-3193-4b33-8176-97bad56f431f',
    '939fd027-2438-4c66-9190-561310c63aad',
    '01594da6-f012-4746-a744-1b5af922d639',
    '18c9a638-d3ee-40f7-aaf9-0a249213cf15',
    '905e9d9e-df44-4d10-b03f-93ddcc63b3f4',
    'e930e8f5-e0ef-4dde-b1e4-191123c59c65',
    'a6784f42-5927-47ae-ab04-070ee83787f3',
    '4a434fdf-9233-4e65-bfff-800a46cc519e',
    '00c5c16b-736a-4ba6-85e4-e33fe1366b97',
    '6aa7c38a-31b1-4403-92fa-929839aa7b09',
    '54c171d5-8dc0-4991-b464-c2791102893c',
    'ca9a5bd0-bbb5-48e4-9f37-da1ea05edae7',
    'f93a30da-38a0-4fc3-a571-3b28005cedbb',
    'b2746c09-57e7-4753-a173-02d2b370deaf',
    '5b077ba7-06a2-420e-aac9-f0109ed3b913',
    'df2d5371-3dad-4cb4-9b2f-f150878bbdc0',
    '5c80c757-d68a-4401-8d34-539c664a63e5',
    '8cd2c863-553c-4ae2-842d-4d0ee8862409',
    'a75c37c4-dede-4655-b68a-b8cc8cb9d82c',
    'b838ec74-6392-4d45-a1f1-281531b011eb',
    '1a632f3f-80e8-4bf9-bbb9-1b4b54b642d5',
    '18bdfc4e-996a-4f81-a4f1-c83a74ccdbba',
    'c57d21cc-b87d-488c-933f-8fec1b8afcee',
    '046d52ca-7f6c-45c1-a4c4-22ba8fbca251',
    'd65a2621-c333-40b6-be88-ca1d4470acf0',
    '14440c19-43c9-4362-b48f-0f3e14cf368b',
    '26967783-b6e9-405d-9c62-ef8acf8f0789',
    'ef6b5b33-0d50-484b-b996-54a7d917080f',
    'c8159a73-81b8-46db-8510-6360437db04d',
    'f9b18905-77b3-4926-aa69-d2d4ef640e6f',
    'cc76f129-5d5c-482d-83b7-d0c812ef54eb',
    'daa61d52-d666-45f5-94ad-bafd16d10394',
    '6ab35beb-822a-49b0-bb45-3782aff1b68b',
    '0ef55ec0-666a-43d4-9799-eaed57275404',
  ]

  /** @private */
  #matrix = new Array(n ** 2).fill(null)

  /**
   * @typedef {Object} Card
   * @property {string} url_img - Url of the card image.
   * @property {string} id - ID of the card.
   */

  /**
   * Generates an unordered array of cards.
   *
   * @returns {Array<Card>}
   */
  generateMatrix() {
    let ids_clone = this.#ids.slice()

    let cards_clone = this.#unique_cards
      .map((card) => structuredClone(card))
      .splice(0, n ** 2 / 2)

    const gameMatrix = this.#matrix.map(() => {
      let remain_cards = 0
      let ind = 0

      /**
       * Filter pairs of cards already used
       * Modify the order so that the last two elements are not always the same.
       */
      cards_clone = cards_clone
        .sort(() => Math.random() - 0.5)
        .filter((card) => card.uses !== 0)

      remain_cards = cards_clone.length - 1

      ind = Math.floor(remain_cards * Math.random())

      let card = cards_clone[ind]
      let url_img = card.url_img

      // The id in the variable is the id removed from ids_clone.
      let id = ids_clone.pop()

      card.uses = card.uses - 1

      return { url_img, id }
    })

    return gameMatrix
  }
}

const newGame = new Game()

export default newGame

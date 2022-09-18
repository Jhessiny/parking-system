export const PADDING = 10
export const SPOT_HEIGHT = 50
export const SPOT_WIDTH = 100
export const TEXT_WIDTH = 23.34
export const TEXT_HEIGHT = 12
export const IMAGE_WIDTH = 90
export const IMAGE_HEIGHT = 45

export const carImage = () => {
  const image = new window.Image()
  image.src = '/src/assets/car.png'
  image.width = 90
  image.height = 45
  return image
}

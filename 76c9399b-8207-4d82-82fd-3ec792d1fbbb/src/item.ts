export type Props = {
  image: string
}

type ChangeTextType = { newText: string }

export default class SignPost implements IScript<Props> {
  init() {}

  spawn(host: Entity, props: Props, channel: IChannel) {
    const sign = new Entity()
    sign.setParent(host)

    sign.addComponent(new GLTFShape('76c9399b-8207-4d82-82fd-3ec792d1fbbb/models/Billboard_White.glb'))
    sign.addComponent(new Transform({}))

    let url = props.image

    let QRTexture = new Texture(url)
    let QRMaterial = new Material()
    QRMaterial.metallic = 0
    QRMaterial.roughness = 1
    QRMaterial.specularIntensity = 0
    QRMaterial.albedoTexture = QRTexture

    let QRPlane = new Entity()
    QRPlane.setParent(host)
    QRPlane.addComponent(new PlaneShape())
    QRPlane.addComponent(QRMaterial)
    QRPlane.addComponent(
      new Transform({
        position: new Vector3(0, 3.85, 0.21),
        rotation: Quaternion.Euler(180, 0, 0),
        scale: new Vector3(2.3, 2.3, 2.3),
      })
    )
    let QRPlane2 = new Entity()
    QRPlane2.setParent(host)
    QRPlane2.addComponent(new PlaneShape())
    QRPlane2.addComponent(QRMaterial)
    QRPlane2.addComponent(
      new Transform({
        position: new Vector3(0, 3.85, -0.21),
        rotation: Quaternion.Euler(180, 180, 0),
        scale: new Vector3(2.3, 2.3, 2.3),
      })
    )
  }
}
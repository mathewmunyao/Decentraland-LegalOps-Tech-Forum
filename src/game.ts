import * as utils from "@dcl/ecs-scene-utils"
import * as access from '@dcl/access-area'
import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../6ff6b3aa-083a-4e8c-bdd8-b4d64e1f2db1/src/item"
import Script2 from "../a72de884-e275-490d-b1bb-7f7eaca4777f/src/item"
import Script3 from "../76c9399b-8207-4d82-82fd-3ec792d1fbbb/src/item"
import Script4 from "../69577e82-2c61-4caa-8647-5af13360f509/src/item"
import Script5 from "../6ef2baf2-3d2e-4093-b22b-34c2b6bb0e7b/src/item"
import Script6 from "../b88efbbf-2a9a-47b4-86e1-e38ecc2b433b/src/item"
import Script7 from "../7d669c08-c354-45e4-b3a3-c915c8fd6b6e/src/item"
import Script8 from "../a747f104-5434-42a8-a543-8739c24cf253/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(16, 0, -16),
  rotation: Quaternion.Euler(0, -90, 0),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const entity2 = new Entity('entity2')
engine.addEntity(entity2)
entity2.setParent(_scene)
entity2.addComponentOrReplace(gltfShape)
const transform3 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity2.addComponentOrReplace(transform3)

const stageDcl = new Entity('stageDcl')
engine.addEntity(stageDcl)
stageDcl.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(28.047115325927734, 0, 8.207674026489258),
  rotation: new Quaternion(-1.6514071129992113e-14, 0.7081667184829712, -8.442003718300839e-8, -0.7060453295707703),
  scale: new Vector3(1.3128371238708496, 1.5560953617095947, 1.683306336402893)
})
stageDcl.addComponentOrReplace(transform4)
const gltfShape2 = new GLTFShape("7485518b-e7d1-4035-98f0-8a61f4b5f98f/stage-dcl.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
stageDcl.addComponentOrReplace(gltfShape2)

const invisibleWall = new Entity('invisibleWall')
engine.addEntity(invisibleWall)
invisibleWall.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(26.572668075561523, 0, 8.19734001159668),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(9.424725532531738, 1, 12.502814292907715)
})
invisibleWall.addComponentOrReplace(transform5)

const invisibleRamp = new Entity('invisibleRamp')
engine.addEntity(invisibleRamp)
invisibleRamp.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(20.517370223999023, 0, 8.077460289001465),
  rotation: new Quaternion(-4.4964595774228764e-15, -0.7075488567352295, 8.434638942844686e-8, 0.7066644430160522),
  scale: new Vector3(4.67749547958374, 0.8763725757598877, 3.146796703338623)
})
invisibleRamp.addComponentOrReplace(transform6)

const klieg = new Entity('klieg')
engine.addEntity(klieg)
klieg.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(22.5, 0.8922958374023438, 14),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
klieg.addComponentOrReplace(transform7)
const gltfShape3 = new GLTFShape("8601c6fc-7417-4dbc-ac33-6ab894be3bdf/klieg.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
klieg.addComponentOrReplace(gltfShape3)

const klieg2 = new Entity('klieg2')
engine.addEntity(klieg2)
klieg2.setParent(_scene)
klieg2.addComponentOrReplace(gltfShape3)
const transform8 = new Transform({
  position: new Vector3(22.371238708496094, 0.8922958374023438, 2.580249309539795),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
klieg2.addComponentOrReplace(transform8)

const imageBillboardWhite = new Entity('imageBillboardWhite')
engine.addEntity(imageBillboardWhite)
imageBillboardWhite.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(29.567258834838867, 2.755388021469116, 1.8193620443344116),
  rotation: new Quaternion(-1.4217254260876747e-15, -0.4622344374656677, 5.510264244890095e-8, 0.8867578506469727),
  scale: new Vector3(1.0000014305114746, 1, 1.0000014305114746)
})
imageBillboardWhite.addComponentOrReplace(transform9)

const imageBillboardWhite2 = new Entity('imageBillboardWhite2')
engine.addEntity(imageBillboardWhite2)
imageBillboardWhite2.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(29.29942512512207, 2.755388021469116, 14.227079391479492),
  rotation: new Quaternion(1.0204534564356091e-14, 0.9150102138519287, -1.0907770331414213e-7, -0.4034308195114136),
  scale: new Vector3(1.0000033378601074, 1, 1.0000033378601074)
})
imageBillboardWhite2.addComponentOrReplace(transform10)

const lightColumn = new Entity('lightColumn')
engine.addEntity(lightColumn)
lightColumn.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(29.311803817749023, 0, 14.207010269165039),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.661393165588379, 3.979802131652832, 1.9323947429656982)
})
lightColumn.addComponentOrReplace(transform11)
const gltfShape4 = new GLTFShape("3c3d75e8-cf1b-4d2c-9a9f-473efdc598b2/Light_02/Light_02.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
lightColumn.addComponentOrReplace(gltfShape4)

const lightColumn2 = new Entity('lightColumn2')
engine.addEntity(lightColumn2)
lightColumn2.setParent(_scene)
lightColumn2.addComponentOrReplace(gltfShape4)
const transform12 = new Transform({
  position: new Vector3(29.557039260864258, 0, 1.8043053150177002),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.661393165588379, 3.979802131652832, 1.9323947429656982)
})
lightColumn2.addComponentOrReplace(transform12)

const ringedPlanet = new Entity('ringedPlanet')
engine.addEntity(ringedPlanet)
ringedPlanet.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(26.090694427490234, 20.12681770324707, 8.08470630645752),
  rotation: new Quaternion(2.7402064297509963e-15, -0.7908533215522766, 9.427706260112245e-8, 0.6120058298110962),
  scale: new Vector3(1.4048925638198853, 1.312504529953003, 1.3470593690872192)
})
ringedPlanet.addComponentOrReplace(transform13)
const gltfShape5 = new GLTFShape("804b3b43-cf0b-43fc-817d-b1b9aa9e3653/Planet_04/Planet_04.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
ringedPlanet.addComponentOrReplace(gltfShape5)

const futuristicSiren2 = new Entity('futuristicSiren2')
engine.addEntity(futuristicSiren2)
futuristicSiren2.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(22.249340057373047, 1.9601802825927734, 15.290050506591797),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
futuristicSiren2.addComponentOrReplace(transform14)

const futuristicSiren3 = new Entity('futuristicSiren3')
engine.addEntity(futuristicSiren3)
futuristicSiren3.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(22.249340057373047, 1.9601802825927734, 1.1569271087646484),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
futuristicSiren3.addComponentOrReplace(transform15)

const blueSpacePod = new Entity('blueSpacePod')
engine.addEntity(blueSpacePod)
blueSpacePod.setParent(_scene)
const transform16 = new Transform({
  position: new Vector3(27, 12.40170669555664, 8.308175086975098),
  rotation: new Quaternion(0.16933202743530273, -0.6981191635131836, 0.16398313641548157, 0.6760664582252502),
  scale: new Vector3(1.8589270114898682, 1.556525468826294, 1.2247216701507568)
})
blueSpacePod.addComponentOrReplace(transform16)
const gltfShape6 = new GLTFShape("9218ffcc-dc52-4207-85bd-ff122153644d/SpaceShip_02/SpaceShip_02.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
blueSpacePod.addComponentOrReplace(gltfShape6)

const laserball = new Entity('laserball')
engine.addEntity(laserball)
laserball.setParent(_scene)
const transform17 = new Transform({
  position: new Vector3(26.776103973388672, 0.256375789642334, 8.235258102416992),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.4001986980438232, 1.4976551532745361, 1.3455092906951904)
})
laserball.addComponentOrReplace(transform17)
const gltfShape7 = new GLTFShape("e0a0b52c-b7a9-4391-868c-dbc92a5ac254/laserball.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
laserball.addComponentOrReplace(gltfShape7)

const ballDroid = new Entity('ballDroid')
engine.addEntity(ballDroid)
ballDroid.setParent(_scene)
const transform18 = new Transform({
  position: new Vector3(16.8640193939209, 12.157208442687988, 6.8291449546813965),
  rotation: new Quaternion(0.529559850692749, -0.2528302073478699, 0.21004897356033325, 0.7819992303848267),
  scale: new Vector3(2.662259817123413, 2.8228421211242676, 2.71749210357666)
})
ballDroid.addComponentOrReplace(transform18)
const gltfShape8 = new GLTFShape("53a5cc56-9817-4556-a172-bc1a4256610d/Droid_01/Droid_01.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
ballDroid.addComponentOrReplace(gltfShape8)

const laserball2 = new Entity('laserball2')
engine.addEntity(laserball2)
laserball2.setParent(_scene)
const transform19 = new Transform({
  position: new Vector3(16, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.327125072479248, 1.5146082639694214, 1.4642338752746582)
})
laserball2.addComponentOrReplace(transform19)
laserball2.addComponentOrReplace(gltfShape7)

const stageDclPanel = new Entity('stageDclPanel')
engine.addEntity(stageDclPanel)
stageDclPanel.setParent(_scene)
const transform20 = new Transform({
  position: new Vector3(1.0605239868164062, 0, 7.859638690948486),
  rotation: new Quaternion(5.424786511789908e-16, 0.7080937623977661, -8.441134724535004e-8, 0.7061184048652649),
  scale: new Vector3(0.9999958872795105, 1, 0.5000037550926208)
})
stageDclPanel.addComponentOrReplace(transform20)
const gltfShape9 = new GLTFShape("ab2a989e-408e-49c1-9a67-65171d8cfd77/Stage dcl-panel.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
stageDclPanel.addComponentOrReplace(gltfShape9)

const bentPalmTree = new Entity('bentPalmTree')
engine.addEntity(bentPalmTree)
bentPalmTree.setParent(_scene)
const transform21 = new Transform({
  position: new Vector3(3, 0, 13.5),
  rotation: new Quaternion(0.13683921098709106, -0.843946099281311, -0.2560081481933594, 0.4510985314846039),
  scale: new Vector3(0.6091704964637756, 0.36207103729248047, 0.8158303499221802)
})
bentPalmTree.addComponentOrReplace(transform21)
const gltfShape10 = new GLTFShape("e0db669f-e803-4528-bb16-e1e3001956d9/PalmTree_01/PalmTree_01.glb")
gltfShape10.withCollisions = true
gltfShape10.isPointerBlocker = true
gltfShape10.visible = true
bentPalmTree.addComponentOrReplace(gltfShape10)

const bentPalmTree2 = new Entity('bentPalmTree2')
engine.addEntity(bentPalmTree2)
bentPalmTree2.setParent(_scene)
bentPalmTree2.addComponentOrReplace(gltfShape10)
const transform22 = new Transform({
  position: new Vector3(4, 0, 3),
  rotation: new Quaternion(-0.38842618465423584, 0.7803783416748047, -0.155226930975914, 0.46480029821395874),
  scale: new Vector3(0.6091713309288025, 0.36207133531570435, 0.8158313632011414)
})
bentPalmTree2.addComponentOrReplace(transform22)

const barM = new Entity('barM')
engine.addEntity(barM)
barM.setParent(_scene)
const transform23 = new Transform({
  position: new Vector3(12, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
barM.addComponentOrReplace(transform23)
const gltfShape11 = new GLTFShape("c1df1416-3b66-4fa7-890b-d292521a853c/Furnit Bar 2 3M.glb")
gltfShape11.withCollisions = true
gltfShape11.isPointerBlocker = true
gltfShape11.visible = true
barM.addComponentOrReplace(gltfShape11)

const rectangularCanopy = new Entity('rectangularCanopy')
engine.addEntity(rectangularCanopy)
rectangularCanopy.setParent(_scene)
const transform24 = new Transform({
  position: new Vector3(12.5, 0, 1.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(0.5000006556510925, 1, 0.5000006556510925)
})
rectangularCanopy.addComponentOrReplace(transform24)
const gltfShape12 = new GLTFShape("b822fad3-67d2-472b-aaf2-84fffad00b8c/Canopy_02/Canopy_02.glb")
gltfShape12.withCollisions = true
gltfShape12.isPointerBlocker = true
gltfShape12.visible = true
rectangularCanopy.addComponentOrReplace(gltfShape12)

const panel = new Entity('panel')
engine.addEntity(panel)
panel.setParent(_scene)
const transform25 = new Transform({
  position: new Vector3(1.898398518562317, 0.46712398529052734, 7.926202774047852),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5512032508850098, 1, 1)
})
panel.addComponentOrReplace(transform25)
const gltfShape13 = new GLTFShape("e96d4dd2-c8d9-421a-ad95-c67303e8a5ec/panel1.glb")
gltfShape13.withCollisions = true
gltfShape13.isPointerBlocker = true
gltfShape13.visible = true
panel.addComponentOrReplace(gltfShape13)

const invisibleWall2 = new Entity('invisibleWall2')
engine.addEntity(invisibleWall2)
invisibleWall2.setParent(_scene)
const transform26 = new Transform({
  position: new Vector3(1.496854543685913, 0, 7.8538970947265625),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.808286428451538, 0.6149373054504395, 9.528761863708496)
})
invisibleWall2.addComponentOrReplace(transform26)

const invisibleRamp2 = new Entity('invisibleRamp2')
engine.addEntity(invisibleRamp2)
invisibleRamp2.setParent(_scene)
const transform27 = new Transform({
  position: new Vector3(3.487630844116211, 0, 7.945849418640137),
  rotation: new Quaternion(2.250747170630678e-15, 0.7092747688293457, -8.455214128844091e-8, 0.7049322128295898),
  scale: new Vector3(3.6867072582244873, 0.5643748044967651, 1.1837011575698853)
})
invisibleRamp2.addComponentOrReplace(transform27)

const imageScreen = new Entity('imageScreen')
engine.addEntity(imageScreen)
imageScreen.setParent(_scene)
const transform28 = new Transform({
  position: new Vector3(31.522262573242188, 0, 8.04537296295166),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.5767358541488647, 1.0748941898345947, 0.21875135600566864)
})
imageScreen.addComponentOrReplace(transform28)

const imageScreen2 = new Entity('imageScreen2')
engine.addEntity(imageScreen2)
imageScreen2.setParent(_scene)
const transform29 = new Transform({
  position: new Vector3(0.3437175750732422, 0, 8.04537296295166),
  rotation: new Quaternion(-5.085791644321002e-15, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.350665807723999, 1.0336437225341797, 0.21875165402889252)
})
imageScreen2.addComponentOrReplace(transform29)

const externalLink = new Entity('externalLink')
engine.addEntity(externalLink)
externalLink.setParent(_scene)
const transform30 = new Transform({
  position: new Vector3(2.580151081085205, 0.6753843426704407, 7.925826072692871),
  rotation: new Quaternion(-1.2743590839106247e-16, -0.7071068286895752, 8.429370268459024e-8, 0.7071067690849304),
  scale: new Vector3(0.7358556985855103, 0.6379475593566895, 1)
})
externalLink.addComponentOrReplace(transform30)

const externalLink2 = new Entity('externalLink2')
engine.addEntity(externalLink2)
externalLink2.setParent(_scene)
const transform31 = new Transform({
  position: new Vector3(2.580151081085205, 0.6753843426704407, 4.651787281036377),
  rotation: new Quaternion(-1.2743590839106247e-16, -0.7071068286895752, 8.429370268459024e-8, 0.7071067690849304),
  scale: new Vector3(0.7358556985855103, 0.6379475593566895, 1)
})
externalLink2.addComponentOrReplace(transform31)

const externalLink3 = new Entity('externalLink3')
engine.addEntity(externalLink3)
externalLink3.setParent(_scene)
const transform32 = new Transform({
  position: new Vector3(2.580151081085205, 0.6753843426704407, 11.12900161743164),
  rotation: new Quaternion(-1.2743590839106247e-16, -0.7071068286895752, 8.429370268459024e-8, 0.7071067690849304),
  scale: new Vector3(0.7358556985855103, 0.6379475593566895, 1)
})
externalLink3.addComponentOrReplace(transform32)

const imageFromURL = new Entity('imageFromURL')
engine.addEntity(imageFromURL)
imageFromURL.setParent(_scene)
const transform33 = new Transform({
  position: new Vector3(2.2249755859375, 0.6356230974197388, 7.920995712280273),
  rotation: new Quaternion(-1.0371868675943256e-15, 0.7071068286895752, -8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(2.5018112659454346, 0.7386007905006409, 1.0380604267120361)
})
imageFromURL.addComponentOrReplace(transform33)

const invisibleWall3 = new Entity('invisibleWall3')
engine.addEntity(invisibleWall3)
invisibleWall3.setParent(_scene)
const transform34 = new Transform({
  position: new Vector3(1.8952853679656982, 0.6717893481254578, 7.921753883361816),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.695134162902832, 0.897506594657898, 4.081401348114014)
})
invisibleWall3.addComponentOrReplace(transform34)

const videoStream = new Entity('videoStream')
engine.addEntity(videoStream)
videoStream.setParent(_scene)
const transform35 = new Transform({
  position: new Vector3(0.16950124502182007, 1.3813347816467285, 8.208075523376465),
  rotation: new Quaternion(-1.9455749640203465e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(0.8801218867301941, 0.0713999792933464, 1.0000030994415283)
})
videoStream.addComponentOrReplace(transform35)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
const script4 = new Script4()
const script5 = new Script5()
const script6 = new Script6()
const script7 = new Script7()
const script8 = new Script8()
script1.init(options)
script2.init(options)
script3.init(options)
script4.init(options)
script5.init(options)
script6.init(options)
script7.init(options)
script8.init(options)
script1.spawn(invisibleWall, {"enabled":true}, createChannel(channelId, invisibleWall, channelBus))
script2.spawn(invisibleRamp, {"enabled":true}, createChannel(channelId, invisibleRamp, channelBus))
script3.spawn(imageBillboardWhite, {"image":"https://ipfs.io/ipfs/QmTrJg511JeszVcNHS6t5gyjzufkC3sa9v19iYVqEX8KsD?filename=92fcfd13-e975-4fe8-8aee-77bdc3f82127.jpg"}, createChannel(channelId, imageBillboardWhite, channelBus))
script3.spawn(imageBillboardWhite2, {"image":"https://ipfs.io/ipfs/QmcbGuBrzJifHeoDw7DmwBrmKcQeRbgNuJX7EXAquRaqrU?filename=4509f413-bf90-4928-95a9-4075d2dbc07c.jpg"}, createChannel(channelId, imageBillboardWhite2, channelBus))
script4.spawn(futuristicSiren2, {}, createChannel(channelId, futuristicSiren2, channelBus))
script4.spawn(futuristicSiren3, {}, createChannel(channelId, futuristicSiren3, channelBus))
script1.spawn(invisibleWall2, {"enabled":true}, createChannel(channelId, invisibleWall2, channelBus))
script2.spawn(invisibleRamp2, {"enabled":true}, createChannel(channelId, invisibleRamp2, channelBus))
script5.spawn(imageScreen, {"image":"https://ipfs.io/ipfs/QmQWDUmPxbAQuHNtwk6PCJZpSK8GA5UuBTKtbCqPopUWV6?filename=8c29b8dd-cfda-4d33-acd2-e8731da1663a.jpg"}, createChannel(channelId, imageScreen, channelBus))
script5.spawn(imageScreen2, {"image":"https://pbs.twimg.com/media/Fh7KBJeXEAE49mm?format=jpg&name=large"}, createChannel(channelId, imageScreen2, channelBus))
script6.spawn(externalLink, {"url":"https://www.evisort.com/"}, createChannel(channelId, externalLink, channelBus))
script6.spawn(externalLink2, {"url":"https://nftnftnft.io/"}, createChannel(channelId, externalLink2, channelBus))
script6.spawn(externalLink3, {"url":"https://www.kplabs.com/"}, createChannel(channelId, externalLink3, channelBus))
script7.spawn(imageFromURL, {"image":"https://ipfs.io/ipfs/QmeMcMNRJZ2asBkXkdhbNuQ3MuxNkSiWQrUecfW12aHR6W?filename=c6fb0b17-8617-4d61-afcb-19184e037c9b.jpg"}, createChannel(channelId, imageFromURL, channelBus))
script1.spawn(invisibleWall3, {"enabled":true}, createChannel(channelId, invisibleWall3, channelBus))
script8.spawn(videoStream, {"startOn":"false","onClickText":"","volume":1,"onClick":[],"customStation":"https://video.dcl.guru/live/group/index.m3u8"}, createChannel(channelId, videoStream, channelBus))


// Concert stage wall

let wall = access.createArea({
  transform: {position: new Vector3(7.8,0,10.5), scale: new Vector3(12.5,10,10)},
  debug: false,
  type: access.Type.ADDRESS,
  allowedAddresses: ["0xb986484D9A399EbfA0E30c1a3499bD36B3429df5", "0x319f517F0447Eb118947f814F239460bA1511Afc", "0xD9e424871cdf9cA51FCdaf694495c00Aa39ceF4b", "0x444e265881EF76DE89af506b2006593FB1C65Ec0"],
  name: "wall",
  deniedMessage: "You're not allowed here"
})

// Panel wall

let wall2 = access.createArea({
  transform: {position: new Vector3(8,0,-14.3), scale: new Vector3(10,10,3)},
  debug: false,
  type: access.Type.ADDRESS,
  allowedAddresses: ["0xD9e424871cdf9cA51FCdaf694495c00Aa39ceF4b", "0x444e265881EF76DE89af506b2006593FB1C65Ec0", "0x9dF333a0cc786745264C07dd86c30d0ee78353F1", "0x4133f82098D0cf5E2C62B2653C8D8e22A8C3467D", "0x546f79e62bad31837c20ce9b3DC8e080EE259e4d"],
  name: "wall2",
  deniedMessage: "You're not allowed here"
})
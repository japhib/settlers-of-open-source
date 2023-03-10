import GameTown from './gametown';
import { resourceToLand, ResourceType, TerrainType } from './terrain-type';
import HexCoords from './utils/hex-coords';
import VertexCoords, { VertexDirection } from './utils/vertex-coords';

export default class GameHex {
  coords: HexCoords;
  terrainType: TerrainType;
  resourceType?: ResourceType;
  frequency?: number;

  constructor(coords: HexCoords, terrainType: TerrainType, resourceType?: ResourceType, frequency?: number) {
    //id = 'h:'+coords.x+','+coords.y;
    this.coords = coords;
    this.terrainType = terrainType;
    this.resourceType = resourceType;
    this.frequency = frequency;
  }

  getLandType(): string | undefined {
    if (!this.resourceType) {
      return undefined;
    }

    return resourceToLand(this.resourceType);
  }

  getType() {
    return "GameHex";
  }
}

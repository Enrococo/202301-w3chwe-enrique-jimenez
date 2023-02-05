interface ComponentStructure {
  domElement: HTMLElement;
  render: () => void;
  addListeners?: () => void;
}

export default ComponentStructure;

export interface PokemonsList {
  id: number;
  name: string;
  weight: number;
  height: number;
  base_experience: number;
  types: { type: { name: string } }[];
  sprites: {
    versions: {
      'generation-v': {
        'black-white': {
          animated: {
            front_default: string;
          };
        };
      };
    };
  };
}

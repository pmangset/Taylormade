import { Product } from '@/context/CartContext';

export const products: Product[] = [
  {
    id: 'qi10-driver',
    name: 'Qi10 Max Driver',
    price: 599.99,
    category: 'drivers',
    image: 'https://images.unsplash.com/photo-1535136104956-619ec3f00036?auto=format&fit=crop&q=80&w=800',
    description: 'Experience 10K MOI. The highest MOI driver in TaylorMade history, designed for unprecedented forgiveness and straight distance.',
    features: [
      '10K MOI for maximum forgiveness',
      'Infinity Carbon Crown with enhanced alignment',
      'Optimized face design for ball speed',
      'Adjustable loft sleeve'
    ],
    specs: {
      'Loft': '9.0°, 10.5°, 12.0°',
      'Lie': '56° - 60°',
      'Volume': '460cc',
      'Length': '45.5"'
    }
  },
  {
    id: 'p790-irons',
    name: 'P·790 Irons',
    price: 1399.99,
    category: 'irons',
    image: 'https://images.unsplash.com/photo-1592919505780-303950717480?auto=format&fit=crop&q=80&w=800',
    description: 'Beauty is what you see. Performance is what you feel. The P·790 irons combine forged feel with distance-enhancing technology.',
    features: [
      'SpeedFoam Air for enhanced feel',
      'Thick-Thin Wall Construction',
      'Thru-Slot Speed Pocket',
      'Forged Hollow Body'
    ]
  },
  {
    id: 'spider-tour',
    name: 'Spider Tour Putter',
    price: 349.99,
    category: 'putters',
    image: 'https://images.unsplash.com/photo-1622228943732-218206423924?auto=format&fit=crop&q=80&w=800',
    description: 'The iconic Spider design returns with enhanced stability, alignment, and a pure roll.',
    features: [
      'True Path Alignment',
      'Pure Roll Insert',
      'High MOI Design',
      'TSS Weights'
    ]
  },
  {
    id: 'tp5-balls',
    name: 'TP5 Golf Balls',
    price: 54.99,
    category: 'balls',
    image: 'https://images.unsplash.com/photo-1587329310686-91414b8e3cb7?auto=format&fit=crop&q=80&w=800',
    description: 'The most complete tour ball. 5-layer construction for unmatched performance from tee to green.',
    features: [
      '5-Layer Construction',
      'Speed Wrapped Core',
      'Cast Urethane Cover',
      'Tour Flight Dimple Pattern'
    ]
  },
  {
    id: 'stealth-hd-irons',
    name: 'Stealth HD Irons',
    price: 999.99,
    category: 'irons',
    image: 'https://images.unsplash.com/photo-1592919505780-303950717480?auto=format&fit=crop&q=80&w=800',
    description: 'Designed to deliver high launching distance with draw bias for game improvement.',
    features: [
      'Cap Back Design',
      'ECHO Damping System',
      'Draw Bias Design',
      'High Launch Profile'
    ]
  },
  {
    id: 'qi10-fairway',
    name: 'Qi10 Fairway Wood',
    price: 349.99,
    category: 'drivers',
    image: 'https://images.unsplash.com/photo-1535136104956-619ec3f00036?auto=format&fit=crop&q=80&w=800',
    description: 'The perfect blend of distance and forgiveness in a clean, confident package.',
    features: [
      'Infinity Carbon Crown',
      'V Steel Sole Design',
      'Thru-Slot Speed Pocket',
      'Laser Alignment'
    ]
  }
];

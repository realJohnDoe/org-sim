import { submitProductGraph } from './agent';
import type { TreeNode } from './supplyDemandProductTypes';

// Mock data for testing
const mockProductGraph: TreeNode = {
  id: '2',
  label: 'Product Root',
  value: 5,
  children: [
    {
      id: '5',
      label: 'Feature 1',
      value: 3,
      children: []
    },
    {
      id: '6',
      label: 'Feature 2',
      value: 2,
      children: []
    }
  ]
};

const mockRealDemand: TreeNode = {
  id: '1',
  label: 'Real Demand Root',
  value: 5,
  children: [
    {
      id: '2',
      label: 'Real Demand Product 1',
      value: 3,
      children: [
        {
          id: '5',
          label: 'Real Demand Feature 1',
          value: 1,
          children: []
        },
        {
          id: '6',
          label: 'Real Demand Feature 2',
          value: 1,
          children: []
        }
      ]
    },
    {
      id: '3',
      label: 'Real Demand Product 2',
      value: 2,
      children: []
    },
    {
      id: '4',
      label: 'Real Demand Product 3',
      value: 1,
      children: []
    }
  ]
};

const mismatchedProductGraph: TreeNode = {
  id: '2',
  label: 'Product Root',
  value: 5,
  children: [
    {
      id: '7',
      label: 'Feature 1',
      value: 3,
      children: []
    },
    {
      id: '6',
      label: 'Feature 2',
      value: 2,
      children: []
    }
  ]
};

// Example product graph for a Smartphone
const smartphoneProductGraph: TreeNode = {
  id: 'SP1',
  label: 'Smartphone',
  value: 500,
  children: [
    {
      id: 'SP1-1',
      label: 'Screen',
      value: 100,
      children: [
        {
          id: 'SP1-1-1',
          label: 'Display Panel',
          value: 70,
          children: []
        },
        {
          id: 'SP1-1-2',
          label: 'Touch Layer',
          value: 30,
          children: []
        }
      ]
    },
    {
      id: 'SP1-2',
      label: 'Battery',
      value: 80,
      children: []
    },
    {
      id: 'SP1-3',
      label: 'Processor',
      value: 150,
      children: [
        {
          id: 'SP1-3-1',
          label: 'CPU',
          value: 90,
          children: []
        },
        {
          id: 'SP1-3-2',
          label: 'GPU',
          value: 60,
          children: []
        }
      ]
    },
    {
      id: 'SP1-4',
      label: 'Camera',
      value: 70,
      children: []
    }
  ]
};

// Example product graph for a Car
const carProductGraph: TreeNode = {
  id: 'C1',
  label: 'Car',
  value: 20000,
  children: [
    {
      id: 'C1-1',
      label: 'Engine',
      value: 5000,
      children: [
        {
          id: 'C1-1-1',
          label: 'Engine Block',
          value: 3000,
          children: []
        },
        {
          id: 'C1-1-2',
          label: 'Transmission',
          value: 2000,
          children: []
        }
      ]
    },
    {
      id: 'C1-2',
      label: 'Chassis',
      value: 4000,
      children: []
    },
    {
      id: 'C1-3',
      label: 'Interior',
      value: 3000,
      children: [
        {
          id: 'C1-3-1',
          label: 'Seats',
          value: 1500,
          children: []
        },
        {
          id: 'C1-3-2',
          label: 'Dashboard',
          value: 1500,
          children: []
        }
      ]
    },
    {
      id: 'C1-4',
      label: 'Wheels',
      value: 2000,
      children: [
        {
          id: 'C1-4-1',
          label: 'Tires',
          value: 1200,
          children: []
        },
        {
          id: 'C1-4-2',
          label: 'Rims',
          value: 800,
          children: []
        }
      ]
    }
  ]
};

const lowValueProductGraph: TreeNode = {
  id: '2',
  label: 'Product Root',
  value: 2, // Less than demand value of 3
  children: [
    {
      id: '5',
      label: 'Feature 1',
      value: 1,
      children: []
    },
    {
      id: '6',
      label: 'Feature 2',
      value: 1,
      children: []
    }
  ]
};

describe('Agent Behavior - Act Action', () => {
  test('shouldSubmitProductGraphAndReturnDealBasedOnAlignment', () => {
    const expectedResult = 5; // Assuming the product graph aligns sufficiently for a deal

    // Act
    const result = submitProductGraph(mockProductGraph, mockRealDemand);

    // Assert
    expect(result).toBeDefined();
    expect(result).toBe(expectedResult); // Check if the result matches expected value
  });

  test('shouldReturnZeroIfProductStructureDoesNotMatchRealDemand', () => {
    const expectedResult = 0; // Expect zero due to structural mismatch

    // Act
    const result = submitProductGraph(mismatchedProductGraph, mockRealDemand);

    // Assert
    expect(result).toBeDefined();
    expect(result).toBe(expectedResult); // Check if the result is zero due to mismatch
  });

  test('shouldReturnZeroIfAnyProductNodeValueLessThanDemand', () => {
    const expectedResult = 0; // Expect zero due to value mismatch

    // Act
    const result = submitProductGraph(lowValueProductGraph, mockRealDemand);

    // Assert
    expect(result).toBeDefined();
    expect(result).toBe(expectedResult); // Check if the result is zero due to value less than demand
  });
});

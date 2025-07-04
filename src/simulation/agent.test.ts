import { submitProductGraph } from './agent';
import type { Node } from './supplyDemandProductTypes';

// Mock data for testing
const mockProductGraph: Node[] = [
  { id: '2', label: 'Product Root', value: 5, children: ['5', '6'] },
  { id: '5', label: 'Feature 1', value: 3, children: [] },
  { id: '6', label: 'Feature 2', value: 2, children: [] },
];

const mockRealDemand: Node[] = [
  { id: '1', label: 'Real Demand Root', value: 5, children: ['2', '3', '4'] },
  { id: '2', label: 'Real Demand Product 1', value: 3, children: ['5', '6'] },
  { id: '3', label: 'Real Demand Product 2', value: 2, children: [] },
  { id: '4', label: 'Real Demand Product 3', value: 1, children: [] },
  { id: '5', label: 'Real Demand Feature 1', value: 1, children: [] },
  { id: '6', label: 'Real Demand Feature 2', value: 1, children: [] },
];

describe('Agent Behavior - Act Action', () => {
  test('shouldSubmitProductGraphAndReturnDealBasedOnAlignment', () => {
    // Arrange
    const expectedResult = 5; // Assuming the product graph aligns sufficiently for a deal

    // Act
    const result = submitProductGraph(mockProductGraph, mockRealDemand);

    // Assert
    expect(result).toBeDefined();
    expect(result).toBe(expectedResult); // Check if the result matches expected value
  });

  test('shouldReturnZeroIfProductStructureDoesNotMatchRealDemand', () => {
    // Arrange
    const mismatchedProductGraph: Node[] = [
      { id: '2', label: 'Product Root', value: 5, children: ['7'] }, // Children do not match real demand
      { id: '7', label: 'Feature 1', value: 3, children: [] },
      { id: '6', label: 'Feature 2', value: 2, children: [] },
    ];
    const expectedResult = 0; // Expect zero due to structural mismatch

    // Act
    const result = submitProductGraph(mismatchedProductGraph, mockRealDemand);

    // Assert
    expect(result).toBeDefined();
    expect(result).toBe(expectedResult); // Check if the result is zero due to mismatch
  });
});

import { transform } from '../src/index'

test('example 1', () => {
  expect(
    transform<string>({
      x: 'a',
      y: ['b', 'b1', 'b2'],
      z: ['c', 'c1']
    })
  )
  // @ts-ignore
  .toIncludeSameMembers(
    [
      { x: 'a', y: 'b', z: 'c' },
      { x: 'a', y: 'b', z: 'c1' },
      { x: 'a', y: 'b1', z: 'c' },
      { x: 'a', y: 'b1', z: 'c1' },
      { x: 'a', y: 'b2', z: 'c' },
      { x: 'a', y: 'b2', z: 'c1' },
    ]
  )
})

test('example 2', () => {
  expect(
    transform<number>({
      x: [1, 2],
      y: [3],
      z: [4, 5, 6]
    })
  )
  // @ts-ignore
  .toIncludeSameMembers(
    [
      { x: 1, y: 3, z: 4 },
      { x: 1, y: 3, z: 5 },
      { x: 1, y: 3, z: 6 },
      { x: 2, y: 3, z: 4 },
      { x: 2, y: 3, z: 5 },
      { x: 2, y: 3, z: 6 }
    ]
  )
})

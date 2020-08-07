import { transform } from '../src/index'

test('example 1', () => {
  expect(
    transform<string>({
      an: 'a',
      en: ['c', 'c1']
    })
  )
  // @ts-ignore
  .toIncludeSameMembers(
    [
      { an: 'a', en: 'c' },
      { an: 'a', en: 'c1' }
    ]
  )
})

test('example 2', () => {
  expect(
    transform<number>({
      ax: [5, 7],
      in: [2, 4]
    })
  )
  // @ts-ignore
  .toIncludeSameMembers(
    [
      { ax: 5, in: 2 },
      { ax: 5, in: 4 },
      { ax: 7, in: 2 },
      { ax: 7, in: 4 }
    ]
  )
})

test('example 3', () => {
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

test('example 4', () => {
  expect(
    transform<number>({
      a: [1, 2],
      b: [3, 7],
      k: [4, 5, 6]
    })
  )
  // @ts-ignore
  .toIncludeSameMembers(
    [
      { a: 1, b: 3, k: 4 },
      { a: 1, b: 3, k: 5 },
      { a: 1, b: 3, k: 6 },
      { a: 2, b: 3, k: 4 },
      { a: 2, b: 3, k: 5 },
      { a: 2, b: 3, k: 6 },
      { a: 1, b: 7, k: 4 },
      { a: 1, b: 7, k: 5 },
      { a: 1, b: 7, k: 6 },
      { a: 2, b: 7, k: 4 },
      { a: 2, b: 7, k: 5 },
      { a: 2, b: 7, k: 6 }
    ]
  )
})

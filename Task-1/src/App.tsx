import * as D from './data'

export default function App() {
  const items = [D.randomName(), D.randomSentence()]
  return (
    <div>
      <h2>JSX방식</h2>
      <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
        {items.map((items, index) => (
          <li key={index}>
            <img src={D.randomAvatar()} height='100' />
            <p>{items}</p>
            <p>{items}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
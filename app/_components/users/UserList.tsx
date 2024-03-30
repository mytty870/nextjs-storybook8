import { getUsers } from "@/app/_utils/getUsers"

export type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
      street: string,
      suite: string,
      city: string,
      zipcode: string,
      geo: {
        lat: string,
        lng: string,
      }
    },
    phone: string,
    website: string,
    company: {
      name: string,
      catchPhrase: string,
      bs: string
    }
}

export default async function UserList() {
  const users = await getUsers()

  console.log(users)

  return (
    <ul>
      {users.map((user: User) => {
        return (
          <li key={user.id} style={{marginBottom: '20px'}}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </li>
        )
      })}
    </ul>
  )
}
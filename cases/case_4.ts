

interface Role {
	name: string
}

interface User {
	name: string
	roles: Role[]
}

type rolesType = User['roles']
type roleType = User['roles'][number]

const roles = ['admin', 'user', 'guest'] as const;
type roleTypes = typeof roles[number]
















































































'use client';

import { useQuery, gql } from '@apollo/client';

const LAUNCHES_LIST = gql`
  {
    launchesPast(limit: 10) {
      id
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link
        video_link
      }
      rocket {
        rocket_name
      }
    }
  }
  `;

export function LaunchesList() {
  const { loading, error, data } = useQuery(LAUNCHES_LIST);

  if (loading) return <div>loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <ul>
      {data.launchesPast.map((launch: any) => (
        <li key={launch.id}>{launch.mission_name}</li>
      ))}
    </ul>
  )
}

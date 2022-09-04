import { ApiProperty } from '@nestjs/swagger';

export class IndexApiChuckNorrisSwagger {
  @ApiProperty({
    description: 'Campo responsável por armazenar o status code do erro',
    example: ['Poder do Chuck Norris'],
    isArray: true,
  })
  categories;

  @ApiProperty({
    description:
      'Campo responsável por armazenar a url do icone do chuck norris',
    example: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
  })
  icon_url: string;

  @ApiProperty({
    description: 'Campo responsável por armazenar o id do chuck norris',
    example: '4_8teslmQ4KdPujX_oZjAg',
  })
  id: string;

  @ApiProperty({
    description: 'Campo responsável por armazenar a url da API do chuck norris',
    example: 'https://api.chucknorris.io/jokes/4_8teslmQ4KdPujX_oZjAg',
  })
  url: string;

  @ApiProperty({
    description: 'Campo responsável por armazenar o valor do chuck norris',
    example: 'https://api.chucknorris.io/jokes/4_8teslmQ4KdPujX_oZjAg',
  })
  value: string;
}

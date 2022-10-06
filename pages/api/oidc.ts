// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {Issuer, IssuerMetadata} from "openid-client";

type Data = {
  issuer: string,
  metadata: IssuerMetadata
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const oidcProvider = await Issuer.discover('http://localhost:3333');
  console.log('Discovered issuer %s %O', oidcProvider.issuer, oidcProvider.metadata);
  res.status(200).json({
    issuer: oidcProvider.issuer as string,
    metadata: oidcProvider.metadata
  })
}

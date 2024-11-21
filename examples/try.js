import { multiaddr, fromNodeAddress } from '@multiformats/multiaddr'

// eslint-disable-next-line no-console
const log = console.log

const addr = multiaddr('/ip4/127.0.0.1/udp/1234')
log(addr)
log(addr.bytes)
log(addr.toString())
log(multiaddr(addr.bytes))

log(addr.protoCodes())
log(addr.protoNames())
log(addr.protos())

log(addr.nodeAddress())
log(fromNodeAddress(addr.nodeAddress(), 'udp'))

log(addr.encapsulate('/sctp/5678'))
log(addr.decapsulate('/udp'))

const printer = multiaddr('/ip4/192.168.0.13/tcp/80')
const proxy = multiaddr('/ip4/10.20.30.40/tcp/443')
const printerOverProxy = proxy.encapsulate(printer)
log(printerOverProxy)

const proxyAgain = printerOverProxy.decapsulate('/ip4')
log(proxyAgain)

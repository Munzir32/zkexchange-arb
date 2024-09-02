import {
  FundsReleased as FundsReleasedEvent,
  OrderAccepted as OrderAcceptedEvent,
  OrderCancelled as OrderCancelledEvent,
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent,
  SellOrderPlaced as SellOrderPlacedEvent
} from "../generated/Zkexchange/Zkexchange"
import {
  FundsReleased,
  OrderAccepted,
  OrderCancelled,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  SellOrderPlaced
} from "../generated/schema"

export function handleFundsReleased(event: FundsReleasedEvent): void {
  let entity = new FundsReleased(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.orderId = event.params.orderId
  entity.receiver = event.params.receiver
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOrderAccepted(event: OrderAcceptedEvent): void {
  let entity = new OrderAccepted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.orderId = event.params.orderId
  entity.buyer = event.params.buyer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOrderCancelled(event: OrderCancelledEvent): void {
  let entity = new OrderCancelled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.orderId = event.params.orderId
  entity.seller = event.params.seller
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleAdminChanged(event: RoleAdminChangedEvent): void {
  let entity = new RoleAdminChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.previousAdminRole = event.params.previousAdminRole
  entity.newAdminRole = event.params.newAdminRole

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleGranted(event: RoleGrantedEvent): void {
  let entity = new RoleGranted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleRevoked(event: RoleRevokedEvent): void {
  let entity = new RoleRevoked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSellOrderPlaced(event: SellOrderPlacedEvent): void {
  let entity = new SellOrderPlaced(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.orderId = event.params.orderId
  entity.seller = event.params.seller
  entity.token = event.params.token
  entity.currency = event.params.currency
  entity.amountInToken = event.params.amountInToken
  entity.amountInCurrency = event.params.amountInCurrency

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
import {
  FundsReleased,
  OrderAccepted,
  OrderCancelled,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  SellOrderPlaced
} from "../generated/Zkexchange/Zkexchange"

export function createFundsReleasedEvent(
  orderId: BigInt,
  receiver: Address,
  amount: BigInt
): FundsReleased {
  let fundsReleasedEvent = changetype<FundsReleased>(newMockEvent())

  fundsReleasedEvent.parameters = new Array()

  fundsReleasedEvent.parameters.push(
    new ethereum.EventParam(
      "orderId",
      ethereum.Value.fromUnsignedBigInt(orderId)
    )
  )
  fundsReleasedEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  fundsReleasedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return fundsReleasedEvent
}

export function createOrderAcceptedEvent(
  orderId: BigInt,
  buyer: Address
): OrderAccepted {
  let orderAcceptedEvent = changetype<OrderAccepted>(newMockEvent())

  orderAcceptedEvent.parameters = new Array()

  orderAcceptedEvent.parameters.push(
    new ethereum.EventParam(
      "orderId",
      ethereum.Value.fromUnsignedBigInt(orderId)
    )
  )
  orderAcceptedEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )

  return orderAcceptedEvent
}

export function createOrderCancelledEvent(
  orderId: BigInt,
  seller: Address,
  amount: BigInt
): OrderCancelled {
  let orderCancelledEvent = changetype<OrderCancelled>(newMockEvent())

  orderCancelledEvent.parameters = new Array()

  orderCancelledEvent.parameters.push(
    new ethereum.EventParam(
      "orderId",
      ethereum.Value.fromUnsignedBigInt(orderId)
    )
  )
  orderCancelledEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  orderCancelledEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return orderCancelledEvent
}

export function createRoleAdminChangedEvent(
  role: Bytes,
  previousAdminRole: Bytes,
  newAdminRole: Bytes
): RoleAdminChanged {
  let roleAdminChangedEvent = changetype<RoleAdminChanged>(newMockEvent())

  roleAdminChangedEvent.parameters = new Array()

  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdminRole",
      ethereum.Value.fromFixedBytes(previousAdminRole)
    )
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAdminRole",
      ethereum.Value.fromFixedBytes(newAdminRole)
    )
  )

  return roleAdminChangedEvent
}

export function createRoleGrantedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleGranted {
  let roleGrantedEvent = changetype<RoleGranted>(newMockEvent())

  roleGrantedEvent.parameters = new Array()

  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleGrantedEvent
}

export function createRoleRevokedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleRevoked {
  let roleRevokedEvent = changetype<RoleRevoked>(newMockEvent())

  roleRevokedEvent.parameters = new Array()

  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleRevokedEvent
}

export function createSellOrderPlacedEvent(
  orderId: BigInt,
  seller: Address,
  token: Address,
  currency: string,
  amountInToken: BigInt,
  amountInCurrency: BigInt
): SellOrderPlaced {
  let sellOrderPlacedEvent = changetype<SellOrderPlaced>(newMockEvent())

  sellOrderPlacedEvent.parameters = new Array()

  sellOrderPlacedEvent.parameters.push(
    new ethereum.EventParam(
      "orderId",
      ethereum.Value.fromUnsignedBigInt(orderId)
    )
  )
  sellOrderPlacedEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  sellOrderPlacedEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  sellOrderPlacedEvent.parameters.push(
    new ethereum.EventParam("currency", ethereum.Value.fromString(currency))
  )
  sellOrderPlacedEvent.parameters.push(
    new ethereum.EventParam(
      "amountInToken",
      ethereum.Value.fromUnsignedBigInt(amountInToken)
    )
  )
  sellOrderPlacedEvent.parameters.push(
    new ethereum.EventParam(
      "amountInCurrency",
      ethereum.Value.fromUnsignedBigInt(amountInCurrency)
    )
  )

  return sellOrderPlacedEvent
}

// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class DeployDAO extends ethereum.Event {
  get params(): DeployDAO__Params {
    return new DeployDAO__Params(this);
  }
}

export class DeployDAO__Params {
  _event: DeployDAO;

  constructor(event: DeployDAO) {
    this._event = event;
  }

  get dao(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class DeployEVMScriptRegistry extends ethereum.Event {
  get params(): DeployEVMScriptRegistry__Params {
    return new DeployEVMScriptRegistry__Params(this);
  }
}

export class DeployEVMScriptRegistry__Params {
  _event: DeployEVMScriptRegistry;

  constructor(event: DeployEVMScriptRegistry) {
    this._event = event;
  }

  get reg(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class DAOFactory extends ethereum.SmartContract {
  static bind(address: Address): DAOFactory {
    return new DAOFactory("DAOFactory", address);
  }

  baseACL(): Address {
    let result = super.call("baseACL", "baseACL():(address)", []);

    return result[0].toAddress();
  }

  try_baseACL(): ethereum.CallResult<Address> {
    let result = super.tryCall("baseACL", "baseACL():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  regFactory(): Address {
    let result = super.call("regFactory", "regFactory():(address)", []);

    return result[0].toAddress();
  }

  try_regFactory(): ethereum.CallResult<Address> {
    let result = super.tryCall("regFactory", "regFactory():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  baseKernel(): Address {
    let result = super.call("baseKernel", "baseKernel():(address)", []);

    return result[0].toAddress();
  }

  try_baseKernel(): ethereum.CallResult<Address> {
    let result = super.tryCall("baseKernel", "baseKernel():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  newDAO(_root: Address): Address {
    let result = super.call("newDAO", "newDAO(address):(address)", [
      ethereum.Value.fromAddress(_root)
    ]);

    return result[0].toAddress();
  }

  try_newDAO(_root: Address): ethereum.CallResult<Address> {
    let result = super.tryCall("newDAO", "newDAO(address):(address)", [
      ethereum.Value.fromAddress(_root)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _baseKernel(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _baseACL(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _regFactory(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class NewDAOCall extends ethereum.Call {
  get inputs(): NewDAOCall__Inputs {
    return new NewDAOCall__Inputs(this);
  }

  get outputs(): NewDAOCall__Outputs {
    return new NewDAOCall__Outputs(this);
  }
}

export class NewDAOCall__Inputs {
  _call: NewDAOCall;

  constructor(call: NewDAOCall) {
    this._call = call;
  }

  get _root(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class NewDAOCall__Outputs {
  _call: NewDAOCall;

  constructor(call: NewDAOCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

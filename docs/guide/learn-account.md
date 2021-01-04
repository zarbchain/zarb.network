---
id: learn-account
title: Account info
---


# Account info

Account structure is used to hold the balance and sequence number of accounts.
```go
type Account struct {
   Address  crypto.Address `cbor:"1,keyasint"`
   Number   int            `cbor:"2,keyasint"`
   Sequence int            `cbor:"3,keyasint"`
   Balance  int64          `cbor:"4,keyasint"`
}
```

Example:
Account can be serialized like this:
```
a401540c9819c4d4b1edb7b70e6665287d4ce95401a37702191bd7031823041a007f5535
```

Which can be interpreted like this:
```
{1: h'0C9819C4D4B1EDB7B70E6665287D4CE95401A377', 2: 7127, 3: 35, 4: 8344885}

A4                                      # map(4)
   01                                   # unsigned(1)
   54                                   # bytes(20)
      0C9819C4D4B1EDB7B70E6665287D4CE95401A377 #
   02                                   # unsigned(2)
   19 1BD7                              # unsigned(7127)
   03                                   # unsigned(3)
   18 23                                # unsigned(35)
   04                                   # unsigned(4)
   1A 007F5535                          # unsigned(8344885)
```



Comments:
- Keys are fixed.
- int64 is enough for holding balance
- To generate hash we are using the cbor serialized data. For above example hash is:
```
Hash: 8a010969c3bf76f764bcf6cf230b1fbc55e5c07b954dbf5595e59b854e97ce7c
```
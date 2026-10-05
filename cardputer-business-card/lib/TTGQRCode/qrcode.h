#pragma once
#include <stdint.h>
#include <stdbool.h>
typedef struct { uint8_t version,size,ecc,mode,mask; uint8_t* modules; } QRCode;
#define ECC_LOW 0
#define ECC_MEDIUM 1
#define ECC_QUARTILE 2
#define ECC_HIGH 3
uint16_t qrcode_getBufferSize(uint8_t version);
int8_t qrcode_initText(QRCode*,uint8_t*,uint8_t,uint8_t,const char*);
bool qrcode_getModule(QRCode*,uint8_t,uint8_t);

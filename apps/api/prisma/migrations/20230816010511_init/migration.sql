-- CreateTable
CREATE TABLE "orden" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'Approve',
    "cliente" TEXT NOT NULL,
    "shippingAddress" TEXT NOT NULL,
    "shippingPromise" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "item" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "price" REAL NOT NULL DEFAULT 0,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "ordenId" INTEGER NOT NULL,
    CONSTRAINT "item_ordenId_fkey" FOREIGN KEY ("ordenId") REFERENCES "orden" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

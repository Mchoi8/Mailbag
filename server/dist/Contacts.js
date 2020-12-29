"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Node imports.
var path = __importStar(require("path"));
// Library imports.
var Datastore = require("nedb");
// The worker that will perform contact operations.
var Worker = /** @class */ (function () {
    function Worker() {
        this.db = new Datastore({
            filename: path.join(__dirname, "contacts.db"),
            autoload: true
        });
    } /* End constructor. */
    /**
     * Lists all contacts.
     */
    Worker.prototype.listContacts = function () {
        var _this = this;
        return new Promise(function (res, rej) {
            _this.db.find({}, function (err, docs) {
                if (err) {
                    rej(err);
                }
                else {
                    res(docs);
                }
            });
        });
    };
    /**
     * Add a new contact.
     */
    Worker.prototype.addContact = function (contactInfo) {
        var _this = this;
        return new Promise(function (res, rej) {
            _this.db.insert(contactInfo, function (err, newDoc) {
                if (err) {
                    rej(err);
                }
                else {
                    res(newDoc);
                }
            });
        });
    };
    /**
   * Update an existing contact.
   */
    Worker.prototype.updateContact = function (contactInfo) {
        var _this = this;
        return new Promise(function (res, rej) {
            _this.db.update({ name: contactInfo.name }, contactInfo, {}, function (err, remnum) {
                if (err) {
                    rej(err);
                }
                else {
                    res();
                }
            });
        });
    };
    /**
     * Delete a contact.
     */
    Worker.prototype.deleteContact = function (id) {
        var _this = this;
        return new Promise(function (res, rej) {
            _this.db.remove({ _id: id }, {}, function (err, remnum) {
                if (err) {
                    rej(err);
                }
                else {
                    res();
                }
            });
        });
    };
    return Worker;
}());
exports.Worker = Worker;
//# sourceMappingURL=Contacts.js.map
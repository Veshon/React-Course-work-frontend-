export function Modal(props) {
    return (
        <>
            {props.isDelete ? (
                // Delete modal
                <input
                    type="text"
                    placeholder={props.deletePlaceholder || "Enter description or email"}
                    onChange={(e) => props.setDescription(e.target.value)}
                />
            ) : (
                // Create/Update modal
                <>
                    {props.setDescription && (
                        <input
                            type="text"
                            placeholder="Description"
                            onChange={(e) => props.setDescription(e.target.value)}
                        />
                    )}
                    {props.setPrice && (
                        <input
                            type="number"
                            placeholder="Price"
                            onChange={(e) => props.setPrice(parseFloat(e.target.value))}
                        />
                    )}
                    {props.setQty && (
                        <input
                            type="number"
                            placeholder="Quantity"
                            onChange={(e) => props.setQty(parseInt(e.target.value, 10))}
                        />
                    )}
                    {props.setName && (
                        <input
                            type="text"
                            placeholder="Name"
                            onChange={(e) => props.setName(e.target.value)}
                        />
                    )}
                    {props.setEmail && (
                        <input
                            type="text"
                            placeholder="Email"
                            onChange={(e) => props.setEmail(e.target.value)}
                        />
                    )}
                    {props.setPhone && (
                        <input
                            type="text"
                            placeholder="Phone"
                            onChange={(e) => props.setPhone(e.target.value)}
                        />
                    )}
                </>
            )}
            <br />
            <button onClick={props.handleSubmit}>{props.children}</button>
        </>
    );
}
